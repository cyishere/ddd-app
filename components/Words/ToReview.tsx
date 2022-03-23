import styled from "styled-components";
import Card from "../Card";
import Loader from "../Loader";
import { PlaceholderText } from "../Placeholder";
import { CardWrapper } from "./styles";

interface ToReviewProps {}

const ToReview: React.FC<ToReviewProps> = () => {
  // get sets
  // get words by sets
  const loading = false;
  const sets: any[] = [];

  if (loading) {
    return (
      <PlaceholderText>
        <Loader size={48} />
      </PlaceholderText>
    );
  }

  if (sets.length === 0) {
    return <PlaceholderText>You haven&#39;t started.</PlaceholderText>;
  }

  return (
    <Wrapper>
      <Card color="green" title="Set 4" number="90" percentage="10%" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${CardWrapper}
`;

export default ToReview;
