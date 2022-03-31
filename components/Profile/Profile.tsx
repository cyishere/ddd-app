import type { QueryResult } from "@apollo/client";
import styled from "styled-components";

import type { Set, User } from "@/utils/types";
import {
  Exact,
  GetSetsQuery,
  useGetLearnedWordsByUserLazyQuery,
} from "@/graphql/generated/graphql";
import Avatar from "../Avatar";
import { DisplaySmMedium, TextMedium, TextNormal } from "../Typography";
import { PlaceholderText } from "../Placeholder";
import Loader from "../Loader";
import { LearnedCard } from "../Words";
import { useEffect, useState } from "react";

interface ProfileProps {
  user: User;
  setsQueryResponse: QueryResult<
    GetSetsQuery,
    Exact<{
      [key: string]: never;
    }>
  >;
}

const Profile: React.FC<ProfileProps> = ({ user, setsQueryResponse }) => {
  const [sets, setSets] = useState<Set[]>([]);
  const {
    data: setsData,
    loading: setsLoading,
    error: setsError,
  } = setsQueryResponse;

  const [
    getLearedWords,
    { data: learnedWords, loading: learnedLoading, error: learnedError },
  ] = useGetLearnedWordsByUserLazyQuery();

  useEffect(() => {
    if (user) {
      getLearedWords({ variables: { user_id: user.sub } });
    }
  }, [getLearedWords, user]);

  useEffect(() => {
    if (
      setsData &&
      setsData.sets &&
      learnedWords &&
      learnedWords.memorizedWords
    ) {
      const iteratedSets = setsData.sets.map((set) => {
        const learnedWordsInThisSet = learnedWords.memorizedWords.filter(
          (word) => word.set_id === set.id
        );

        // if learned all words of this set
        if (learnedWordsInThisSet.length === set.words.length) {
          return set;
        }
      });

      setSets(iteratedSets.filter((set) => set !== undefined) as Set[]);
    }
  }, [learnedWords, setsData]);

  return (
    <Wrapper>
      <Header>
        <HeaderBg />
        <AvatarContainer>
          <Avatar imageUrl={user.picture} size="large" />
        </AvatarContainer>
        <Name>{user.nickname}</Name>
        <TextNormal as="p">{user.email}</TextNormal>
      </Header>
      <Section>
        <TextMedium as="h2">Words Learned</TextMedium>
        {setsLoading || learnedLoading ? (
          <PlaceholderText>
            <Loader size={48} />
          </PlaceholderText>
        ) : setsError || learnedError ? (
          <PlaceholderText>
            <ErrorText>
              {setsError
                ? setsError.message
                : learnedError
                ? learnedError.message
                : null}
            </ErrorText>
          </PlaceholderText>
        ) : sets.length > 0 ? (
          sets.map((set) => <LearnedCard key={set.id!} set={set} />)
        ) : (
          <PlaceholderText>
            You haven&#39;t learned any word yet.
          </PlaceholderText>
        )}
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  --paddingX: 1.5rem;
  background-color: var(--clr-gray-25);
  width: 100%;
  height: 100vh;
`;

const Header = styled.header`
  padding: 78px var(--paddingX) 0 var(--paddingX);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  > *:not(:first-child) {
    z-index: 1;
  }
`;

const AvatarContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Name = styled.h2`
  ${DisplaySmMedium}
  color: var(--clr-gray-900);
`;

const HeaderBg = styled.div`
  background-image: var(--gradient-placeholder);
  width: 100%;
  height: 120px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

const Section = styled.section`
  padding-left: var(--paddingX);
  padding-right: var(--paddingX);

  > *:first-of-type {
    margin-bottom: 1.5rem;
  }
`;

const ErrorText = styled.span`
  color: var(--clr-red-500);
`;

export default Profile;
