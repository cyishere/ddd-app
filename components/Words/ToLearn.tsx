import { useContext } from "react";
import styled from "styled-components";

import SetsContext from "@/hooks/sets-context";
import Loader from "../Loader";
import { PlaceholderText } from "../Placeholder";
import { CardWrapper } from "./styles";
import WordCard from "./ToLearnCard";

interface ToLearnProps {
  userId: string;
}

const ToLearn: React.FC<ToLearnProps> = ({ userId }) => {
  // get set array
  const { data, loading, error } = useContext(SetsContext);

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
            <WordCard key={set.id} set={set} userId={userId} />
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
