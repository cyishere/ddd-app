import styled from "styled-components";

import type { User } from "@/utils/types";
import SEO from "../SEO";
import Sidebar from "../Sidebar";

interface AppLayoutProps {
  title: string;
  user: User;
}

const AppLayout: React.FC<AppLayoutProps> = ({ title, user, children }) => {
  return (
    <Wrapper>
      <SEO title={title} />
      <Sidebar user={user} />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --paddingLeft: 82px;
  padding-left: var(--paddingLeft);
  width: calc(100% - var(--paddingLeft));
  min-height: 100vh;
`;

export default AppLayout;
