import type { NextPage } from "next";
import Link from "next/link";

import Layout from "@/components/Layout";
import { Button } from "@/components/Button";
import styled from "styled-components";
import Card from "@/components/Card";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Box>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </Box>
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
      <Box>
        <Button variant="error" size="large" disabled>
          Disabled
        </Button>
      </Box>
      <Box>
        <Card title="100" subTitle="Set 1" percentage="0%" />
      </Box>
      <Box>
        <Card color="green" title="50" subTitle="Set 2" percentage="10%" />
      </Box>
      <Box>
        <Card color="yellow" title="30" subTitle="Set 3" percentage="73%" />
      </Box>
    </Layout>
  );
};

const Box = styled.div`
  padding: 2rem;
`;

export default Home;
