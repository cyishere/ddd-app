import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { gql } from "@apollo/client";
import { ArrowRight } from "react-feather";

import type { Set, Word } from "@/utils/types";
import { createApolloClient } from "@/lib/apolloClient";
import { useFetchUser } from "@/hooks/use-fetch-user";
import {
  useGetMemorizedWordsLazyQuery,
  useGetWordsQuery,
} from "@/graphql/generated/graphql";

import { AppLayout } from "@/components/Layout";
import { DisplaySmMedium, TextXlMedium } from "@/components/Typography";
import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/Button";
import { WordContent } from "@/components/Words";
import Loader from "@/components/Loader";
import { AppFooter } from "@/components/Footer";

interface SetProps extends InferGetStaticPropsType<typeof getStaticProps> {
  set: Set;
}

interface CurrentWord {
  word: Word;
  index: number;
}

const INITIAL_CURRENT_WORD = {
  word: { id: 0, article: "", german: "", english: "" },
  index: 0,
};

/**
 * ================================
 * The main page component ========
 * ================================
 */
const Set: NextPage<SetProps> = ({ set }) => {
  const { user } = useFetchUser();
  const [finished, setFinished] = useState(false);
  const [words, setWords] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] =
    useState<CurrentWord>(INITIAL_CURRENT_WORD);
  const [progress, setProgress] = useState(0);

  // Get all words of this set
  const {
    data: wordsData,
    loading: wordsLoading,
    error: wordsError,
  } = useGetWordsQuery({
    variables: { set_id: set.id! },
  });

  // Define the function that can get the learning words of this set
  const [
    getMemorizedWords,
    { data: memorizedData, loading: memorizedLoading, error: memorizedError },
  ] = useGetMemorizedWordsLazyQuery();

  // Show different words depending on if the user logged in
  useEffect(() => {
    if (!user && wordsData && wordsData.words) {
      setWords(wordsData?.words);
    } else if (user) {
      getMemorizedWords({
        variables: { user_id: user.sub, set_id: set.id! },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, wordsData]);

  // Put words to state after fetching the words
  useEffect(() => {
    if (
      memorizedData &&
      memorizedData.memorizedWords &&
      wordsData &&
      wordsData.words
    ) {
      const memorizedWordIds = memorizedData.memorizedWords.map(
        (word) => word.word_id
      );
      const unStartedWords = wordsData.words.filter(
        (word) => !memorizedWordIds.includes(word.id)
      );
      setWords(unStartedWords);
    }
  }, [memorizedData, wordsData]);

  // Set up the current word object after fetching the words
  useEffect(() => {
    setCurrentWord({ word: words[0], index: 0 });
  }, [words]);

  // Function for updating progress bar
  const updateProgress = () => {
    const currentProgress = Math.round(
      ((currentWord.index + 1) / (words.length - 1 || 1)) * 100
    );
    setProgress(currentProgress);
  };

  // Function for getting the next word & whether this set is finished
  const setNextWord = () => {
    if (currentWord.index < words.length - 1) {
      setCurrentWord((prev) => ({
        word: words[prev.index! + 1],
        index: prev.index! + 1,
      }));
      updateProgress();
    } else {
      setFinished(true);
    }
  };

  return (
    <AppLayout title={set.name} user={user}>
      <Wrapper>
        <Main>
          <PageHeader>
            <Title>Words To Learn</Title>
            <ProgressWrapper>
              <ProgressBar value={progress} />
            </ProgressWrapper>
          </PageHeader>
        </Main>
        <Section>
          {finished ? (
            <NotifyText>You&#39;ve finished this set!</NotifyText>
          ) : memorizedLoading || wordsLoading ? (
            <Loader />
          ) : memorizedError || wordsError ? (
            <ErrorText>
              {memorizedError
                ? memorizedError.message
                : wordsError
                ? wordsError.message
                : null}
            </ErrorText>
          ) : (
            <>
              <WordContent word={currentWord.word!} />
              <Button onClick={setNextWord}>
                Next <ArrowRight />
              </Button>
            </>
          )}
        </Section>
        <AppFooter />
      </Wrapper>
    </AppLayout>
  );
};

/**
 * ================================
 * Styles =========================
 * ================================
 */
const Wrapper = styled.div`
  --spacing: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Main = styled.main``;

const PageHeader = styled.header`
  padding: var(--spacing);
  margin-bottom: var(--spacing);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  ${DisplaySmMedium}
  color: var(--clr-gray-900);
`;

const ProgressWrapper = styled.div`
  margin-left: calc(var(--spacing) * 2);
  flex: 1;
`;

const Section = styled.section`
  padding: var(--spacing) calc(var(--spacing) * 2);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing);
`;

const ErrorText = styled.span`
  color: var(--clr-red-500);
`;

const NotifyText = styled.p`
  ${TextXlMedium}
  color: var(--clr-gray-900);
`;

/**
 * ================================
 * Render functions ===============
 * ================================
 */

/**
 * Create Apollo Client
 */
const apolloClient = createApolloClient();

/**
 * Query of getting all the sets
 */
const GET_SETS = gql`
  query GetSets {
    sets {
      id
      name
      slug
    }
  }
`;

/**
 * Get the dynamic routes
 * @returns An array with all the slugs of sets
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({ query: GET_SETS });

  const paths = data.sets.map((set: Set) => {
    return {
      params: {
        slug: set.slug,
      },
    };
  });

  return {
    fallback: false,
    paths: paths,
  };
};

/**
 * Query of getting one set by the slug
 */
const GET_ONE_SET = gql`
  query GetOneSet($slug: String!) {
    sets(where: { slug: { _eq: $slug } }) {
      id
      name
      slug
    }
  }
`;

/**
 * Get the set data by the given slug
 * @param context
 * @returns A set
 */
export const getStaticProps: GetStaticProps = async (context) => {
  // @ts-ignore
  const { slug } = context.params;
  const { data } = await apolloClient.query({
    query: GET_ONE_SET,
    variables: { slug },
  });

  return {
    props: { set: data.sets[0] },
  };
};

export default Set;
