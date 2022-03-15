import type { CSSProperties } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import Layout from "@/components/Layout";
import { Button } from "@/components/Button";
import styled from "styled-components";
import Card from "@/components/Card";
import { words } from "@/utils/words";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Box>
        <span style={{ marginRight: "1rem" } as CSSProperties}>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </span>
        {words.map((word) => (
          <span key={word.id} style={{ marginRight: "1rem" } as CSSProperties}>
            <Link href={`/words/${word.id.toString()}`}>
              <a>{word.german}</a>
            </Link>
          </span>
        ))}
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
        <Card title="Set 3" number="100" percentage="0%" />
      </Box>
      <Box>
        <Card color="green" title="Set 4" number="90" percentage="10%" />
      </Box>
      <Box>
        <Card color="yellow" title="Set 5" number="27" percentage="73%" />
      </Box>
    </Layout>
  );
};

const Box = styled.div`
  padding: 2rem;
`;

export default Home;
