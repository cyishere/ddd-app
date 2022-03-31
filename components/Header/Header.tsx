import { useContext, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Link from "next/link";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import { Menu, X } from "react-feather";

import { QUERIES } from "@/styles/constants";
import UserContext from "@/hooks/user-context";

import Logo from "../Logo";
import { DisplayXsMedium, TextMdMedium } from "../Typography";
import { Button, ButtonLink } from "../Button";

const Header: React.FC = () => {
  const { user, userIsLoading: isLoading } = useContext(UserContext);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const openMobileNav = () => setShowMobileNav(true);
  const closeMobileNav = () => setShowMobileNav(false);

  let NavAction;

  if (!user || isLoading) {
    NavAction = (
      <Right>
        <ButtonLink variant="primary" href="/api/login">
          Login
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
          </Left>
          {NavAction}
        </Nav>

        <MobileNavBtn>
          <Button onClick={openMobileNav}>
            <Menu />
          </Button>
        </MobileNavBtn>
      </Container>

      <MobileNav isOpen={showMobileNav}>
        <MobileNavHeader>
          <SiteTitle>
            <Logo />
            <LogoText>DDD App</LogoText>
          </SiteTitle>

          <MobileNavBtn>
            <Button onClick={closeMobileNav}>
              <X />
            </Button>
          </MobileNavBtn>
        </MobileNavHeader>
        <MobileNavContent>
          <MobileNavLink>
            <Link href="/" passHref>
              <TextLink>Home</TextLink>
            </Link>
            <Link href="/about" passHref>
              <TextLink>How&#39;s this work?</TextLink>
            </Link>
          </MobileNavLink>
          {NavAction}
        </MobileNavContent>
      </MobileNav>
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

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
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

const MobileNavBtn = styled.div`
  display: none;
  z-index: 1000;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
  }
`;

const MobileNav = styled(DialogOverlay)`
  --spacingX: 2rem;
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MobileNavHeader = styled.header`
  ${FlexBetween}
  background-color: var(--clr-white);
  border-bottom: 1px solid var(--clr-gray-100);
  padding: var(--spacingX);
`;

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const MobileNavContent = styled(DialogContent)`
  flex: 1;
  background-color: var(--clr-white);
  padding: var(--spacingX);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${slideDown} 500ms ease-in-out;

  & ${Right} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

const MobileNavLink = styled.nav`
  display: flex;
  flex-direction: column;

  & ${TextLink} {
    color: var(--clr-gray-900);
    padding: calc(var(--spacingX) / 4) 0;

    &:hover {
      color: var(--clr-primary-600);
    }
  }
`;

export default Header;
