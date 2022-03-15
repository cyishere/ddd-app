import type { CSSProperties } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { ArrowRight } from "react-feather";

import { words } from "@/utils/words";
import { AppLayout } from "@/components/Layout";
import { AppFooter } from "@/components/Footer";
import { DisplaySmall } from "@/components/Typography";
import ProgressBar from "@/components/ProgressBar";
import { ButtonLink } from "@/components/Button";
import VisuallyHidden from "@/components/VisuallyHidden";

interface StylesTypes {
  default: Record<string, string>;
  feminine: Record<string, string>;
  neuter: Record<string, string>;
  masculine: Record<string, string>;
}

const STYLES: StylesTypes = {
  default: {
    "--bgColor": "var(--clr-gray-50)",
    "--primaryColor": "var(--clr-gray-900)",
    "--secondaryColor": "var(--clr-gray-700)",
  },
  feminine: {
    "--bgColor": "var(--clr-blue-50)",
    "--primaryColor": "var(--clr-blue-900)",
    "--secondaryColor": "var(--clr-blue-700)",
  },
  neuter: {
    "--bgColor": "var(--clr-green-50)",
    "--primaryColor": "var(--clr-green-900)",
    "--secondaryColor": "var(--clr-green-700)",
  },
  masculine: {
    "--bgColor": "var(--clr-red-50)",
    "--primaryColor": "var(--clr-red-700)",
    "--secondaryColor": "var(--clr-red-500)",
  },
};

const Word: NextPage = () => {
  const word = words.find((w) => w.id === 3);

  const getGender = (
    article: "die" | "das" | "der"
  ): "feminine" | "neuter" | "masculine" => {
    switch (article) {
      case "die":
        return "feminine";

      case "das":
        return "neuter";

      case "der":
        return "masculine";
    }
  };

  let gender: "feminine" | "neuter" | "masculine" | "default" = "default";

  if (word) {
    gender = getGender(word.article!);
  }

  const _styles = STYLES[gender];

  return (
    <AppLayout title="Wasser">
      <Wrapper>
        <Main>
          <PageHeader>
            <DisplaySmall as="h1">Words To Learn</DisplaySmall>
            <ProgressWrapper>
              <ProgressBar value={60} />
            </ProgressWrapper>
          </PageHeader>
        </Main>
        <Section>
          <WordContainer style={_styles as CSSProperties}>
            {word ? (
              <>
                <Article>{word.article}</Article>
                <German>{word.german}</German>
                <English>{word.english}</English>
              </>
            ) : null}
          </WordContainer>
          <ButtonLink href="/words/wasser">
            <ArrowRight />
            <VisuallyHidden>Next</VisuallyHidden>
          </ButtonLink>
        </Section>
        <AppFooter />
      </Wrapper>
    </AppLayout>
  );
};

const Wrapper = styled.div`
  --spacing: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Main = styled.main``;

const PageHeader = styled.header`
  padding: var(--spacing);
  margin-bottom: var(--spacing);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressWrapper = styled.div`
  margin-left: calc(var(--spacing) * 2);
  flex: 1;
`;

const Section = styled.section`
  padding: var(--spacing) calc(var(--spacing) * 2);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing);
`;

const WordContainer = styled.div`
  background-color: var(--bgColor);
  border-radius: 8px;
  padding: var(--spacing);
  width: min(100%, 600px);
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Article = styled.span`
  font-size: 1.5rem;
  line-height: 1.33;
  font-weight: 500;
  color: var(--secondaryColor);
`;

const German = styled.span`
  font-size: 1.25rem;
  line-height: 1.267;
  font-weight: 600;
  color: var(--primaryColor);
  margin-bottom: 1rem;
`;

const English = styled.span`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  color: var(--clr-gray-500);
`;

export default Word;
