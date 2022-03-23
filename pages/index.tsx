import type { CSSProperties } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Link from "next/link";

import Layout from "@/components/Layout";
import { Button, ButtonLink } from "@/components/Button";
import { DisplayXlSemiBold, TextXlMedium } from "@/components/Typography";
import { PlayCircle } from "react-feather";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Cta>
        <Greeting>A neat tool helps you learn German nouns.</Greeting>
        <Description>
          DDD is not just a flashcard.
          <br />
          We use color to present different type nouns, and provide SRS system
          to help you to remember them.
        </Description>
        <ActionGroup>
          <Button>
            <PlayCircle size={18} />
            <span>Demo</span>
          </Button>
          <ButtonLink variant="primary" href="/register">
            Sign Up
          </ButtonLink>
        </ActionGroup>
      </Cta>
    </Layout>
  );
};

const Cta = styled.section`
  --spacingY: 3rem;
  --spacingX: 2rem;
  text-align: center;
  padding: calc(var(--spacingY) * 2) var(--spacingX);

  & > *:not(:last-child) {
    margin-bottom: var(--spacingY);
  }
`;

const Greeting = styled.p`
  ${DisplayXlSemiBold}
  color: var(--clr-gray-900);
`;

const Description = styled.p`
  ${TextXlMedium}
  color: var(--clr-gray-500);
  max-width: 36ch;
  margin: 0 auto;
`;

const ActionGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(var(--spacingX) / 2);
`;

export default Home;
