import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import router from "next/router";
import { gql } from "@apollo/client";

import type { CurrentWord, Set, MemorizedWord } from "@/utils/types";
import { createApolloClient } from "@/lib/apolloClient";
import {
  INITIAL_CURRENT_WORD,
  reviewAvailable,
  updateProgress,
} from "@/utils/helpers";
import { useGetUnfinishedWordsLazyQuery } from "@/graphql/generated/graphql";
import UserContext from "@/hooks/user-context";

import { AppLayout } from "@/components/Layout";
import ProgressBar from "@/components/ProgressBar";
import { AppFooter } from "@/components/Footer";
import { DisplaySmMedium } from "@/components/Typography";
import { PlaceholderPage, PlaceholderText } from "@/components/Placeholder";
import Loader from "@/components/Loader";
import { WordContentInForm } from "@/components/Words";

interface ReviewProps extends InferGetStaticPropsType<typeof getStaticProps> {
  set: Set;
}

const Review: NextPage<ReviewProps> = ({ set }) => {
  const { user, userIsLoading: isLoading } = useContext(UserContext);
  const [
    getWords,
    { data: allWords, loading: allWordsLoading, error: allWordsError },
  ] = useGetUnfinishedWordsLazyQuery();
  const [words, setWords] = useState<MemorizedWord[]>([]);
  const [currentWord, setCurrentWord] =
    useState<CurrentWord>(INITIAL_CURRENT_WORD);
  const [progress, setProgress] = useState(0);
  const [next, setNext] = useState(false);

  // Check whether the user is logged
  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/");
    }
  }, [user, isLoading]);

  // Fetch the user's learning words
  useEffect(() => {
    if (user) {
      getWords({ variables: { user_id: user.sub, set_id: set.id! } });
    }
  }, [getWords, set.id, user]);

  // filter words that ready to review from allWords
  // base on the `updated_at` value: whether it is less than one day
  useEffect(() => {
    if (allWords && allWords.memorizedWords) {
      const availabledWords = allWords.memorizedWords.filter((word) =>
        reviewAvailable(word.available_at, word.review!)
      );
      setWords(availabledWords as MemorizedWord[]);
    }
  }, [allWords]);

  // Set up the current word object after fetching the words
  useEffect(() => {
    if (words.length > 0) {
      setCurrentWord({
        word: words[0].word,
        index: 0,
        memorized_id: words[0].id,
        review: words[0].review!,
      });
    }
  }, [words]);

  // Get the next word
  useEffect(() => {
    if (next) {
      setCurrentWord((prev) => ({
        word: words[prev.index! + 1].word,
        index: prev.index! + 1,
        memorized_id: words[prev.index! + 1].id,
        review: words[prev.index! + 1].review!,
      }));
      setNext(false);
      updateProgress(currentWord.index, words.length, setProgress);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next, words]);

  if (isLoading || !user) {
    return (
      <PlaceholderPage>
        <p>Loading</p>
      </PlaceholderPage>
    );
  }

  return (
    <AppLayout title="Review">
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
          {allWordsLoading ? (
            <PlaceholderText>
              <Loader />
            </PlaceholderText>
          ) : allWordsError ? (
            <ErrorText>{allWordsError.message}</ErrorText>
          ) : (
            <WordContentInForm
              currentWord={currentWord}
              setProgress={setProgress}
              setCurrentWord={setCurrentWord}
              setNext={setNext}
            />
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
  display: grid;
  place-content: center;
  z-index: 0;
`;

const ErrorText = styled.p`
  color: var(--clr-red-500);
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

export default Review;
