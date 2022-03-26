import type { CSSProperties, FormEvent } from "react";
import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import { Check, X } from "react-feather";

import { words } from "@/utils/words";

import { AppLayout } from "@/components/Layout";
import ProgressBar from "@/components/ProgressBar";
import { AppFooter } from "@/components/Footer";
import RadioGroup from "@/components/RadioGroup";
import { Button, ButtonLink } from "@/components/Button";
import { DisplaySmMedium } from "@/components/Typography";

const _STYLES = {
  default: {
    "--bgColor": "transparent",
  },
  success: {
    "--bgColor": "var(--clr-yellow-50)",
  },
  error: {
    "--bgColor": "var(--clr-gray-100)",
  },
};

interface ReviewStateType {
  value: null | "success" | "error";
  styles: Record<string, string>;
}

const Review: NextPage = () => {
  const [articleState, setArticleState] = useState({
    checked: false,
    value: "",
  });
  const [reviewState, setReviewState] = useState<ReviewStateType>({
    value: null,
    styles: _STYLES["default"],
  });

  const word = words.find((w) => w.id === 1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (word) {
      if (articleState.value === word.article) {
        setReviewState({
          value: "success",
          styles: _STYLES["success"],
        });
      } else {
        setReviewState({
          value: "error",
          styles: _STYLES["error"],
        });
      }
    }
  };

  return (
    <AppLayout title="Review">
      <Wrapper>
        <Main>
          <PageHeader>
            <Title>Words To Learn</Title>
            <ProgressWrapper>
              <ProgressBar value={60} />
            </ProgressWrapper>
          </PageHeader>
        </Main>
        <Section style={reviewState.styles as CSSProperties}>
          <Form onSubmit={handleSubmit}>
            <WordContainer>
              <RadioGroup
                setArticleState={setArticleState}
                reviewState={reviewState.value}
              />
              {word ? (
                <>
                  <German>{word.german}</German>
                  <English>{word.english}</English>
                </>
              ) : null}
            </WordContainer>
            {reviewState.value === "success" ? (
              <ButtonWrapperChecked>
                <SuccessIcon>
                  <Check size={48} strokeWidth={5} />
                </SuccessIcon>
                <ButtonLink href="/review" variant="success" size="large">
                  Continue
                </ButtonLink>
              </ButtonWrapperChecked>
            ) : reviewState.value === "error" ? (
              <ButtonWrapperChecked>
                <ErrorIcon>
                  <X size={48} strokeWidth={5} />
                </ErrorIcon>
                <ButtonLink href="/review" variant="error" size="large">
                  Continue
                </ButtonLink>
              </ButtonWrapperChecked>
            ) : (
              <ButtonWrapper>
                <Button
                  size="large"
                  variant="primary"
                  type="submit"
                  disabled={articleState.checked ? false : true}
                >
                  CHECK
                </Button>
              </ButtonWrapper>
            )}
          </Form>
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

const Title = styled.h1`
  ${DisplaySmMedium}
  color: var(--clr-gray-900);
`;

const ProgressWrapper = styled.div`
  margin-left: calc(var(--spacing) * 2);
  flex: 1;
`;

const Section = styled.section`
  background-color: var(--bgColor);
  padding: var(--spacing) calc(var(--spacing) * 2);
  flex: 1;
  display: grid;
  place-content: center;
  z-index: 0;
`;

const Form = styled.form`
  --gap: calc(var(--spacing) * 2);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap);
`;

const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const German = styled.span`
  font-size: 1.875rem;
  line-height: 1.267;
  font-weight: 600;
  color: var(--clr-gray-900);
  margin-bottom: 1rem;
`;

const English = styled.span`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  color: var(--clr-gray-500);
`;

const ButtonWrapper = styled.div`
  padding-top: calc(6.25rem + var(--gap));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap);
`;

const ButtonWrapperChecked = styled(ButtonWrapper)`
  padding-top: 0;
`;

const Icon = styled.div`
  color: var(--clr-white);
  background-color: var(--iconBg);
  border-radius: 50%;
  width: 6.25rem;
  height: 6.25rem;
  display: grid;
  place-content: center;
`;

const SuccessIcon = styled(Icon)`
  --iconBg: var(--clr-yellow-300);
`;

const ErrorIcon = styled(Icon)`
  --iconBg: var(--clr-gray-500);
`;

export default Review;
