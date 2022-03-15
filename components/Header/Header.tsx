import styled from "styled-components";

import { DisplaySmall } from "../Typography";
import { ButtonLink } from "../Button";
import Logo from "../Logo";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <SiteTitle>
        <Logo />
        <LogoText as="h1">DDD App</LogoText>
      </SiteTitle>

      <ButtonLink variant="primary" href="/logo">
        Login
      </ButtonLink>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 2rem;
  border-bottom: 1px solid var(--clr-gray-200);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SiteTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoText = styled(DisplaySmall)`
  margin-left: 0.875rem;
`;

export default Header;
