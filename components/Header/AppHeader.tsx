import styled from "styled-components";

import { DisplaySmall, TextNormal } from "../Typography";

interface AppHeaderProps {
  title: string;
  subTitle?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <DisplaySmall as="h1">{title}</DisplaySmall>
      <TextNormal as="p">{subTitle}</TextNormal>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: var(--spacing);
  margin-bottom: var(--spacing);
`;

export default AppHeader;
