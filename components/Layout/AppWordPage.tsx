import type { CSSProperties } from "react";
import styled from "styled-components";
import { ArrowRight } from "react-feather";

import { getGender } from "@/utils/helpers";
import { GenderTypes } from "@/utils/types";
import { WordType } from "@/utils/words";

import AppLayout from "./AppLayout";
import { ButtonLink } from "../Button";
import ProgressBar from "../ProgressBar";
import { DisplaySmall } from "../Typography";
import VisuallyHidden from "../VisuallyHidden";
import { AppFooter } from "../Footer";

interface AppWordPageProps {
  word: WordType | undefined;
  nextUrl: string;
}

interface StylesTypes {
  default: Record<string, string>;
  feminine: Record<string, string>;
  neuter: Record<string, string>;
  masculine: Record<string, string>;
}

const _STYLES: StylesTypes = {
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

const AppWordPage: React.FC<AppWordPageProps> = ({ word, nextUrl }) => {
  let gender: GenderTypes | "default" = "default";
  const title = word ? word.german : "Word Not Found";

  if (word) {
    gender = getGender(word.article!);
  }

  const styles = _STYLES[gender];

  return (
    <AppLayout title={title}>
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
          <WordContainer style={styles as CSSProperties}>
            {word ? (
              <>
                <Article>{word.article}</Article>
                <German>{word.german}</German>
                <English>{word.english}</English>
              </>
            ) : null}
          </WordContainer>
          <ButtonLink href={`/words/${nextUrl}`}>
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

export default AppWordPage;
