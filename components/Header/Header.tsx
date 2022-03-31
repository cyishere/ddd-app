import { useContext } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

import UserContext from "@/hooks/user-context";
import Logo from "../Logo";
import { DisplayXsMedium, TextMdMedium } from "../Typography";
import { ButtonLink } from "../Button";

const Header: React.FC = () => {
  const { user, userIsLoading: isLoading } = useContext(UserContext);

  let NavAction;

  if (!user || isLoading) {
    NavAction = (
      <Right>
        <Link href="/api/login" passHref>
          <TextLink>Login</TextLink>
        </Link>
        <ButtonLink variant="primary" href="/register">
          Sign Up
        </ButtonLink>
      </Right>
    );
  } else {
    NavAction = (
      <Right>
        <TextLink as="span">Hello, {user.nickname}!</TextLink>
        <Link href="/dashboard" passHref>
          <TextLink>Dashboard</TextLink>
        </Link>
        <ButtonLink href="/api/logout">Logout</ButtonLink>
      </Right>
    );
  }

  return (
    <Wrapper>
      <Container>
        <SiteTitle>
          <Logo />
          <LogoText>DDD App</LogoText>
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
          {NavAction}
        </Nav>
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
  padding: var(--spacingX);
`;

const Container = styled.div`
  ${FlexBetween}
  max-width: var(--maxWidth);
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

const LogoText = styled.span`
  ${DisplayXsMedium}
  color: var(--clr-gray-900);
  margin-left: 0.875rem;
`;

export default Header;
