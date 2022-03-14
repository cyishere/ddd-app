import type { NextPage } from "next";

import Layout from "@/components/Layout";
import { Button } from "@/components/Button";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      Hello!
      <Box>
        <Button>Default</Button>
      </Box>
      <Box>
        <Button variant="primary">Primary</Button>
      </Box>
      <Box>
        <Button variant="success" size="large">
          Default
        </Button>
      </Box>
      <Box>
        <Button variant="error" size="large">
          Default
        </Button>
      </Box>
    </Layout>
  );
};

const Box = styled.div`
  padding: 2rem;
`;

export default Home;
