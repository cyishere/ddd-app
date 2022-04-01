import styled from "styled-components";

import { DisplaySmMedium, TextMdNormal } from "../Typography";

interface AppHeaderProps {
  title: string;
  subTitle?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Sub>{subTitle}</Sub>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: var(--spacing);
  margin-bottom: var(--spacing);
`;

const Title = styled.h1`
  ${DisplaySmMedium}
  color: var(--clr-gray-900);
`;

const Sub = styled.p`
  ${TextMdNormal}
  color: var(--clr-gray-500);
`;

export default AppHeader;
