import styled from "styled-components";

import SEO from "../SEO";
import Sidebar from "../Sidebar";

interface AppLayoutProps {
  title: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <SEO title={title} />
      <Sidebar />
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
