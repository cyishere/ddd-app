import styled from "styled-components";
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Home, Activity, LogOut } from "react-feather";

import { QUERIES } from "@/styles/constants";
import UserContext from "@/hooks/user-context";
import Logo from "../Logo";
import VisuallyHidden from "../VisuallyHidden";
import Avatar from "../Avatar";

const Sidebar: React.FC = () => {
  const { user } = useContext(UserContext);
  const pathname = useRouter().pathname.slice(1);

  return (
    <Wrapper>
      <Nav>
        <SideTitle>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>

          <VisuallyHidden>DDD App</VisuallyHidden>
        </SideTitle>
        <NavList>
          <NavItem>
            <Link href="/dashboard" passHref>
              <NavLink className={pathname === "dashboard" ? "active" : ""}>
                <Home />
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <NavLink
              as="span"
              className={pathname !== "dashboard" ? "active" : ""}
            >
              <Activity />
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <Footer>
        <NavList>
          <NavItem>
            <Link href="/api/logout" passHref>
              <NavLink>
                <LogOut />
              </NavLink>
            </Link>
          </NavItem>
        </NavList>
        <AvatarContainer>
          {user ? <Avatar imageUrl={user.picture} /> : null}
        </AvatarContainer>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  --paddingY: 2rem;
  --width: 3rem;
  border-right: 1px solid var(--clr-gray-200);
  padding: var(--paddingY) 0;
  width: 82px;
  height: calc(100vh - var(--paddingY) * 2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideTitle = styled.div`
  margin-bottom: 1.5rem;
`;

const NavList = styled.ul``;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const NavLink = styled.a`
  color: var(--clr-gray-500);
  border-radius: 6px;
  width: var(--width);
  height: var(--width);
  display: grid;
  place-content: center;

  &.active {
    color: var(--clr-primary-600);
    background-color: var(--clr-primary-50);
  }

  &:hover {
    background-color: var(--clr-gray-200);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const AvatarContainer = styled.div`
  border-top: 1px solid var(--clr-gray-200);
  padding-top: 1.5rem;
  width: 3rem;
`;

export default Sidebar;
