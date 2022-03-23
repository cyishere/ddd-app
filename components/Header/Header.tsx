import styled, { css } from "styled-components";
import Link from "next/link";

import Logo from "../Logo";
import { DisplayXsMedium, TextMdMedium } from "../Typography";
import { ButtonLink } from "../Button";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <Container>
        <SiteTitle>
          <Logo />
          <LogoText as="h1">DDD App</LogoText>
        </SiteTitle>

        <Nav>
          <Left>
            <Link href="/" passHref>
              <TextLink>Home</TextLink>
            </Link>
            <Link href="/about" passHref>
              <TextLink>How&#39;s this work?</TextLink>
            </Link>
          </Left>
        </Nav>
        <Right>
          <Link href="/login" passHref>
            <TextLink>Login</TextLink>
          </Link>
          <ButtonLink variant="primary" href="/register">
            Sign Up
          </ButtonLink>
        </Right>
      </Container>
    </Wrapper>
  );
};

const FlexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.header`
  --spacingX: 2rem;
  padding: var(--spacingX);
`;

const Container = styled.div`
  ${FlexBetween}
  max-width: 1200px;
  margin: 0 auto;
  gap: var(--spacingX);
`;

const Nav = styled.nav`
  ${FlexBetween}
  flex: 1;
`;
const Left = styled.div`
  ${FlexBetween}
  gap: var(--spacingX);
`;
const Right = styled.div`
  ${FlexBetween}
  gap: calc(var(--spacingX) / 2);
`;

const TextLink = styled.a`
  ${TextMdMedium}
  color: var(--clr-gray-500);
`;

const SiteTitle = styled.div`
  ${FlexBetween}
`;

const LogoText = styled.h1`
  ${DisplayXsMedium}
  color: var(--clr-gray-900);
  margin-left: 0.875rem;
`;

export default Header;
