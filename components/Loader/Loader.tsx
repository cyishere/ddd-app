import styled, { keyframes } from "styled-components";
import { Loader as Loading } from "react-feather";

const spinning = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled(Loading)`
  animation: ${spinning} 3s ease-in-out infinite;
`;

export default Loader;
