import type { QueryResult } from "@apollo/client";
import { useRef } from "react";
import styled from "styled-components";

import { Exact, GetSetsQuery } from "@/graphql/generated/graphql";
import Loader from "../Loader";
import { PlaceholderText } from "../Placeholder";
import { CardWrapper } from "./styles";
import WordCard from "./ToReviewCard";

interface ToReviewProps {
  userId: string;
  setsQueryResponse: QueryResult<
    GetSetsQuery,
    Exact<{
      [key: string]: never;
    }>
  >;
}

const ToReview: React.FC<ToReviewProps> = ({ setsQueryResponse, userId }) => {
  const { data: setsData, loading, error } = setsQueryResponse;
  const setsStarted = useRef<boolean[]>([]);

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

  console.log({ setsStarted: setsStarted.current.every((x) => x) });

  return (
    <>
      {setsStarted.current.every((x) => x) && setsData && userId ? (
        <Wrapper>
          {setsData.sets.map((set) => (
            <WordCard
              key={set.id}
              set={set}
              setsStarted={setsStarted}
              userId={userId}
            />
          ))}
        </Wrapper>
      ) : (
        <PlaceholderText>You haven&#39;t started.</PlaceholderText>
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

export default ToReview;
