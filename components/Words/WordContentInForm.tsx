import {
  CSSProperties,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
} from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Check, RefreshCw, X } from "react-feather";

import type { ArticleTypes, CurrentWord } from "@/utils/types";
import { _STYLES, StylesTypes } from "./WordContent.helpers";
import { useUpdateMemorizedWordMutation } from "@/graphql/generated/graphql";
import { newReviewDate } from "@/utils/helpers";

import { Button } from "../Button";
import RadioGroup from "../RadioGroup";
import { spinning } from "../Loader/Loader";

interface WordContentInFormProps {
  currentWord: CurrentWord;
  setCurrentWord: Dispatch<SetStateAction<CurrentWord>>;
  setProgress: Dispatch<SetStateAction<number>>;
  setNext: Dispatch<SetStateAction<boolean>>;
}

interface ReviewStateType {
  value: null | "success" | "error";
  styles: Record<string, string>;
}

const RESUTL_STYLES = {
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

const CONTAINER_STYLES: StylesTypes = {
  ..._STYLES,
  default: {
    "--bgColor": "transparent",
    "--primaryColor": "var(--clr-gray-900)",
    "--secondaryColor": "var(--clr-gray-700)",
  },
};

const INITIAL_ARTICLE_STATE = {
  checked: false,
  value: "",
};

const INITIAL_REVIEW_STATE = {
  value: null,
  styles: RESUTL_STYLES["default"],
};

const WordContentInForm: React.FC<WordContentInFormProps> = ({
  currentWord,
  setNext,
}) => {
  const { word, review, memorized_id } = currentWord;
  const [articleState, setArticleState] = useState(INITIAL_ARTICLE_STATE);
  const [reviewState, setReviewState] =
    useState<ReviewStateType>(INITIAL_REVIEW_STATE);
  const [containerStyles, setContainerStyles] = useState(
    CONTAINER_STYLES["default"]
  );
  const [updateWord, { data: updateResult, loading: updateLoading }] =
    useUpdateMemorizedWordMutation();

  const gender =
    word?.article === "die"
      ? "feminine"
      : word?.article === "der"
      ? "masculine"
      : word?.article === "das"
      ? "neuter"
      : "default";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setContainerStyles(CONTAINER_STYLES[gender]);

    if (word) {
      if (articleState.value === word.article) {
        setReviewState({
          value: "success",
          styles: RESUTL_STYLES["success"],
        });
      } else {
        setReviewState({
          value: "error",
          styles: RESUTL_STYLES["error"],
        });
      }
    }
  };

  const setNextWord = () => {
    // Update the review number
    // if success review increment, else review decrement
    let newReview = review!;
    if (reviewState.value === "success") {
      newReview = review! < 4 ? review! + 1 : 100;
    } else if (reviewState.value === "error") {
      newReview = review! > 0 ? review! - 1 : 0;
    }

    // store this timestamp on `updated_at` column
    const availableTime = newReviewDate(newReview);

    // update the database
    updateWord({
      variables: {
        id: memorized_id!,
        review: newReview,
        available_at: availableTime,
      },
    });
  };

  useEffect(() => {
    // get the next word
    if (updateResult && updateResult.update_memorizedWords_by_pk) {
      setArticleState(INITIAL_ARTICLE_STATE);
      setReviewState(INITIAL_REVIEW_STATE);
      setContainerStyles(CONTAINER_STYLES["default"]);
      setNext(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateResult]);

  return (
    <Form onSubmit={handleSubmit}>
      <WordContainer style={containerStyles as CSSProperties}>
        <RadioGroup
          article={word.article as ArticleTypes}
          articleState={articleState}
          setArticleState={setArticleState}
          reviewState={reviewState.value}
        />
        {word ? (
          <>
            <German>{word.german}</German>
            {reviewState.value ? <English>{word.english}</English> : null}
          </>
        ) : null}
      </WordContainer>
      {reviewState.value === "success" ? (
        <ButtonWrapperChecked>
          <SuccessIcon>
            <Check size={48} strokeWidth={5} />
          </SuccessIcon>
          <Button
            variant="success"
            size="large"
            onClick={setNextWord}
            disabled={updateLoading}
          >
            {updateLoading ? <Waiting /> : "Continue"}
          </Button>
        </ButtonWrapperChecked>
      ) : reviewState.value === "error" ? (
        <ButtonWrapperChecked>
          <ErrorIcon>
            <X size={48} strokeWidth={5} />
          </ErrorIcon>
          <Button
            variant="error"
            size="large"
            onClick={setNextWord}
            disabled={updateLoading}
          >
            {updateLoading ? <Waiting /> : "Continue"}
          </Button>
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
  );
};

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
  background-color: var(--bgColor);
  border-radius: 8px;
  padding: var(--spacing);
  width: min(100%, 600px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 0;
`;

const German = styled.span`
  font-size: 1.875rem;
  line-height: 1.267;
  font-weight: 600;
  /* color: var(--clr-gray-900); */
  color: var(--primaryColor);
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

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const zoomIn = keyframes`
  0% {
    transform: scale(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
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
  animation: ${zoomIn} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

const ErrorIcon = styled(Icon)`
  --iconBg: var(--clr-gray-500);
  animation: ${shake} 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

const Waiting = styled(RefreshCw)`
  animation: ${spinning} 3s linear infinite;
`;

export default WordContentInForm;
