import type { QueryResult } from "@apollo/client";
import styled from "styled-components";

import type { LearnedSet, User } from "@/utils/types";
import {
  Exact,
  GetSetsQuery,
  useGetLearnedWordsQuery,
} from "@/graphql/generated/graphql";
import Avatar from "../Avatar";
import { DisplaySmall, TextMedium, TextNormal } from "../Typography";
import { PlaceholderText } from "../Placeholder";
import Loader from "../Loader";
import { LearnedCard } from "../Words";

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
  const { data: setData, loading, error } = setsQueryResponse;

  // find all learned words
  const { data: wordData } = useGetLearnedWordsQuery();

  let unfilteredLearnedSets: Array<LearnedSet | undefined>;
  let learnedSets: LearnedSet[] = [];
  // group them by set
  if (setData && wordData) {
    unfilteredLearnedSets = setData.sets.map((set) => {
      const wordsInThisSet = wordData?.words.filter((word) => {
        return word.set_id === set.id;
      });

      if (wordsInThisSet.length > 0) {
        return {
          set_id: set.id,
          set_name: set.name,
          words_length: wordsInThisSet.length,
        };
      }
    });

    learnedSets = unfilteredLearnedSets.filter((set) => set) as LearnedSet[];
  }

  return (
    <Wrapper>
      <Header>
        <HeaderBg />
        <AvatarContainer>
          <Avatar imageUrl={user.picture} size="large" />
        </AvatarContainer>
        <DisplaySmall as="h2">{user.nickname}</DisplaySmall>
        <TextNormal as="p">{user.email}</TextNormal>
      </Header>
      <Section>
        <TextMedium as="h2">Words Learned</TextMedium>
        {loading ? (
          <PlaceholderText>
            <Loader size={48} />
          </PlaceholderText>
        ) : error ? (
          <PlaceholderText>
            <ErrorText>{error.message}</ErrorText>
          </PlaceholderText>
        ) : learnedSets && learnedSets.length > 0 ? (
          learnedSets.map((set) => <LearnedCard key={set?.set_id} set={set!} />)
        ) : (
          <PlaceholderText>You haven&#39;t learned yet.</PlaceholderText>
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
