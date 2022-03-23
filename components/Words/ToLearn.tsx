import { useGetSetsQuery } from "graphql/generated/graphql";
import styled from "styled-components";
import Loader from "../Loader";
import { PlaceholderText } from "../Placeholder";
import { CardWrapper } from "./styles";
import WordCard from "./ToLearnCard";

interface ToLearnProps {}

const ToLearn: React.FC<ToLearnProps> = () => {
  // get set array
  const { data, loading, error } = useGetSetsQuery();
  console.log({ set: data });

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

  // get words array by set

  return (
    <>
      {data ? (
        <Wrapper>
          {data.sets.map((set) => (
            <WordCard key={set.id} set={set} />
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
