import type { CSSProperties } from "react";
import styled from "styled-components";

import Badge from "../Badge";

import { FlexBetween } from "../Box";
import { DisplaySmall, TextNormal } from "../Typography";

interface CardProps {
  color?: "default" | "green" | "yellow";
  subTitle: string;
  title: string;
  percentage: string;
}

const STYLES = {
  default: {
    "--bgColor": `var(--clr-white)`,
    "--borderColor": `var(--clr-gray-200)`,
  },
  green: {
    "--bgColor": `var(--clr-white)`,
    "--borderColor": `var(--clr-green-500)`,
  },
  yellow: {
    "--bgColor": `var(--clr-white)`,
    "--borderColor": `var(--clr-yellow-300)`,
  },
};

const Card: React.FC<CardProps> = ({
  color = "default",
  subTitle,
  title,
  percentage,
}) => {
  const _styles = STYLES[color];

  return (
    <Wrapper style={_styles as CSSProperties}>
      <TextNormal as="h3">{subTitle}</TextNormal>
      <FlexBetween>
        <DisplaySmall as="h2">{title}</DisplaySmall>
        <Badge color={color}>{percentage}</Badge>
      </FlexBetween>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* styles */
  background-color: var(--bgColor);
  border-style: solid;
  border-width: 1px;
  border-color: var(--borderColor);
  box-shadow: var(--bs-sm);
  border-radius: 0.5rem;
  padding: 1.5rem;

  /* layout */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  row-gap: 1.5rem;

  &:hover {
    box-shadow: var(--bs-md);
  }
`;

export default Card;
