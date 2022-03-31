import { useContext, useState } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import { X, Menu } from "react-feather";

import { QUERIES } from "@/styles/constants";
import UserContext from "@/hooks/user-context";
import { Button, ButtonLink } from "../Button";
import { DisplayXsMedium, TextMdMedium } from "../Typography";
import Logo from "../Logo";

const MobileNav: React.FC = () => {
  const { user, userIsLoading: isLoading } = useContext(UserContext);

  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleMobileNav = () => setShowMobileNav(!showMobileNav);

  let NavAction;

  if (!user || isLoading) {
    NavAction = (
      <ActionWrapper>
        <ButtonLink variant="primary" href="/api/login">
          Login
        </ButtonLink>
      </ActionWrapper>
    );
  } else {
    NavAction = (
      <ActionWrapper>
        <TextLink as="span">Hello, {user.nickname}!</TextLink>
        <Link href="/dashboard" passHref>
          <TextLink>Dashboard</TextLink>
        </Link>
        <ButtonLink href="/api/logout">Logout</ButtonLink>
      </ActionWrapper>
    );
  }

  const headerContent = (
    <MobileNavHeader>
      <SiteTitle>
        <Logo />
        <LogoText>DDD App</LogoText>
      </SiteTitle>

      <MobileNavBtn>
        <Button onClick={toggleMobileNav}>
          {showMobileNav ? <X /> : <Menu />}
        </Button>
      </MobileNavBtn>
    </MobileNavHeader>
  );

  return (
    <Wrapper>
      {headerContent}
      <Overlay isOpen={showMobileNav}>
        {headerContent}
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
      </Overlay>
    </Wrapper>
  );
};

const FlexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
  }
`;

const Overlay = styled(DialogOverlay)`
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
  padding: 2rem;
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

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: calc(var(--spacingX) / 2);
`;

export default MobileNav;
