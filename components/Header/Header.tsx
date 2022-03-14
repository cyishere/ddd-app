import styled from "styled-components";

import { DisplaySmall } from "../Typography";
import { ButtonLink } from "../Button";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <SiteTitle>
        <Logo>
          <LogoBlock1 />
          <LogoBlock2 />
          <LogoBlock3 />
        </Logo>
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

const Logo = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  overflow: hidden;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

const LogoBlock1 = styled.div`
  background-color: hsl(274deg 54% 45%);
`;

const LogoBlock2 = styled.div`
  background-color: hsl(274deg 37% 76%);
`;

const LogoBlock3 = styled.div`
  background-color: hsl(274deg 31% 79%);
`;

const LogoText = styled(DisplaySmall)`
  margin-left: 0.875rem;
`;

export default Header;
