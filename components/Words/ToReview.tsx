import { useGetSetsQuery } from "graphql/generated/graphql";
import styled from "styled-components";
import Loader from "../Loader";
import { PlaceholderText } from "../Placeholder";
import { CardWrapper } from "./styles";
import WordCard from "./ToReviewCard";

interface ToReviewProps {}

const ToReview: React.FC<ToReviewProps> = () => {
  // get sets
  const { data, loading, error } = useGetSetsQuery();
  // get words by sets

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
            <WordCard key={set.id} set={set} />
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
