import { QUERIES } from "@/styles/constants";
import styled from "styled-components";

import SEO from "../SEO";
import Sidebar from "../Sidebar";
import { MobileNav } from "../Header";

interface AppLayoutProps {
  title: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <SEO title={title} />
      <Sidebar />
      <MobileNav />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --paddingLeft: 82px;
  padding-left: var(--paddingLeft);
  width: calc(100% - var(--paddingLeft));
  min-height: 100vh;

  @media ${QUERIES.tabletAndSmaller} {
    --paddingLeft: 0;
  }
`;

export default AppLayout;
