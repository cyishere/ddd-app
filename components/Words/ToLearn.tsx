import type { QueryResult } from "@apollo/client";
import styled from "styled-components";

import type { User } from "@/utils/types";
import type { Exact, GetSetsQuery } from "@/graphql/generated/graphql";
import Loader from "../Loader";
import { PlaceholderText } from "../Placeholder";
import { CardWrapper } from "./styles";
import WordCard from "./ToLearnCard";

interface ToLearnProps {
  user: User;
  setsQueryResponse: QueryResult<
    GetSetsQuery,
    Exact<{
      [key: string]: never;
    }>
  >;
}

const ToLearn: React.FC<ToLearnProps> = ({ setsQueryResponse, user }) => {
  // get set array
  const { data, loading, error } = setsQueryResponse;

  if (loading) {
    return (
      <PlaceholderText>
        <Loader size={48} />
      </PlaceholderText>
    );
  } else if (error) {
    return (
      <PlaceholderText>
        <ErrorText>{error.message}</ErrorText>
      </PlaceholderText>
    );
  }

  return (
    <>
      {data ? (
        <Wrapper>
          {data.sets.map((set) => (
            <WordCard key={set.id} set={set} userId={user.sub} />
          ))}
        </Wrapper>
      ) : (
        <PlaceholderText>
          <ErrorText>Something wrong...</ErrorText>
        </PlaceholderText>
      )}
    </>
  );
};

const Wrapper = styled.div`
  ${CardWrapper}
`;

const ErrorText = styled.span`
  color: var(--clr-red-500);
`;

export default ToLearn;
