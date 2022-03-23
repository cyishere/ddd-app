import styled from "styled-components";

import SEO from "../SEO";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <SEO title={title} />
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export default Layout;
