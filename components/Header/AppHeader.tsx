import styled from "styled-components";

import { DisplaySmMedium, TextNormal } from "../Typography";

interface AppHeaderProps {
  title: string;
  subTitle?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <TextNormal as="p">{subTitle}</TextNormal>
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

export default AppHeader;
