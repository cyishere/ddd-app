import SEO from "../SEO";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
