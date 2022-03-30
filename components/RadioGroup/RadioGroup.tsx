import {
  ChangeEvent,
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import styled from "styled-components";

import { ArticleTypes } from "@/utils/types";
import { DisplayXsMedium } from "../Typography";

import VisuallyHidden from "../VisuallyHidden";

interface RadioGroupProps {
  article: ArticleTypes;
  articleState: {
    checked: boolean;
    value: string;
  };
  reviewState: null | "success" | "error";
  setArticleState: Dispatch<
    SetStateAction<{
      checked: boolean;
      value: string;
    }>
  >;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  article,
  articleState,
  setArticleState,
  reviewState,
}) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (!articleState.value) {
      inputsRef.current.forEach((input) => {
        input.checked = false;
      });
    }
  }, [articleState.value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArticleState({
      checked: true,
      value: e.target.value,
    });
  };

  return (
    <FieldSet disabled={reviewState ? true : false}>
      <legend>
        <VisuallyHidden>Choose the article</VisuallyHidden>
      </legend>
      {reviewState ? <Article>{article}</Article> : null}

      <Container
        style={
          {
            "--visibility": reviewState ? "hidden" : "visible",
          } as CSSProperties
        }
      >
        <RadioWrapper>
          <Input
            ref={(element: HTMLInputElement) => inputsRef.current.push(element)}
            type="radio"
            name="article"
            id="radioF"
            value="die"
            onChange={handleChange}
          />
          <Label htmlFor="radioF">die</Label>
        </RadioWrapper>
        <RadioWrapper>
          <Input
            ref={(element: HTMLInputElement) => inputsRef.current.push(element)}
            type="radio"
            name="article"
            id="radioN"
            value="das"
            onChange={handleChange}
          />
          <Label htmlFor="radioN">das</Label>
        </RadioWrapper>
        <RadioWrapper>
          <Input
            ref={(element: HTMLInputElement) => inputsRef.current.push(element)}
            type="radio"
            name="article"
            id="radioM"
            value="der"
            onChange={handleChange}
          />
          <Label htmlFor="radioM">der</Label>
        </RadioWrapper>
      </Container>
    </FieldSet>
  );
};

const Container = styled.div`
  margin-bottom: var(--spacing);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Article = styled.span`
  ${DisplayXsMedium}
  color: var(--secondaryColor);
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
`;

const RadioWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 8px;
  width: fit-content;
  box-shadow: var(--bs-sm);
  position: relative;
  visibility: var(--visibility);
`;

const Label = styled.label`
  color: var(--clr-gray-700);
  background-color: var(--clr-white);
  border: 1px solid var(--clr-gray-300);
  border-radius: inherit;
  padding: 6px 16px;
  display: block;
  position: relative;
  z-index: -1;
`;

const Input = styled.input`
  opacity: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  cursor: pointer;

  &:checked + ${Label} {
    color: var(--clr-primary-700);
    background-color: var(--clr-primary-50);
    border-color: var(--clr-primary-500);
  }
`;

const FieldSet = styled.fieldset`
  position: relative;

  &:disabled ${Input} {
    cursor: not-allowed;
  }
`;

export default RadioGroup;
