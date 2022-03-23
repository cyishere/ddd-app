import styled from "styled-components";
import Card from "../Card";
import Loader from "../Loader";
import { PlaceholderText } from "../Placeholder";
import { CardWrapper } from "./styles";

interface ToLearnProps {}

const ToLearn: React.FC<ToLearnProps> = () => {
  // get set array
  // get words array by set
  const loading = false;

  if (loading) {
    return (
      <PlaceholderText>
        <Loader size={48} />
      </PlaceholderText>
    );
  }

  return (
    <Wrapper>
      <Card color="yellow" title="Set 5" number="27" percentage="73%" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${CardWrapper}
`;

export default ToLearn;
