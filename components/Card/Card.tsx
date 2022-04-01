import type { CSSProperties } from "react";
import styled from "styled-components";

import Badge from "../Badge";

import { FlexBetween } from "../Box";
import { DisplaySmMedium, TextMdNormal } from "../Typography";

interface CardProps {
  color?: "default" | "green" | "yellow";
  number: string;
  title: string;
  percentage?: string;
}

const _STYLES = {
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
  number,
  title,
  percentage,
}) => {
  const styles = _STYLES[color];

  return (
    <Wrapper style={styles as CSSProperties}>
      <Title>{title}</Title>
      <FlexBetween>
        <Number>{number}</Number>
        {percentage ? <Badge color={color}>{percentage}</Badge> : null}
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

const Title = styled.h3`
  ${TextMdNormal}
  color: var(--clr-gray-500);
`;

const Number = styled.p`
  ${DisplaySmMedium}
  color: var(--clr-gray-900);
`;

export default Card;
