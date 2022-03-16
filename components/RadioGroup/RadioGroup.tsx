import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import VisuallyHidden from "../VisuallyHidden";

interface RadioGroupProps {
  reviewState: null | "success" | "error";
  setArticleState: Dispatch<
    SetStateAction<{
      checked: boolean;
      value: string;
    }>
  >;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  setArticleState,
  reviewState,
}) => {
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
      <Container>
        <RadioWrapper>
          <Input
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

const RadioWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 8px;
  width: fit-content;
  position: relative;
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
  &:disabled ${Input} {
    cursor: not-allowed;
  }
`;

export default RadioGroup;
