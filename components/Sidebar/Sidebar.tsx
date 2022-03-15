import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { Home, Activity, Settings, LogOut } from "react-feather";

import Logo from "../Logo";
import VisuallyHidden from "../VisuallyHidden";
import Avatar from "../Avatar";
import { debbie } from "@/utils/users";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const pathname = useRouter().pathname.slice(1);

  return (
    <Wrapper>
      <Nav>
        <SideTitle>
          <Logo />
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
            <Link href="/dashboard/status" passHref>
              <NavLink
                className={pathname === "dashboard/status" ? "active" : ""}
              >
                <Activity />
              </NavLink>
            </Link>
          </NavItem>
        </NavList>
      </Nav>
      <Footer>
        <NavList>
          <NavItem>
            <Link href="/dashboard/settings" passHref>
              <NavLink
                className={pathname === "dashboard/settings" ? "active" : ""}
              >
                <Settings />
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/logout" passHref>
              <NavLink>
                <LogOut />
              </NavLink>
            </Link>
          </NavItem>
        </NavList>
        <AvatarContainer>
          <Avatar name={debbie.name} imageUrl={debbie.imageUrl} />
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
