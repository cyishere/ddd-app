import styled from "styled-components";

import { QUERIES } from "@/styles/constants";
import { DisplayXlSemiBold, TextXlMedium } from "../Typography";

export const Cta = styled.section`
  --spacingY: 3rem;
  --spacingX: 2rem;
  text-align: center;
  padding: calc(var(--spacingY) * 2) var(--spacingX);

  & > *:not(:last-child) {
    margin-bottom: var(--spacingY);
  }
`;

export const Greeting = styled.h2`
  ${DisplayXlSemiBold}
  color: var(--clr-gray-900);
`;

export const Description = styled.p`
  ${TextXlMedium}
  color: var(--clr-gray-500);
  max-width: 36ch;
  margin: 0 auto;
`;

export const ActionGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(var(--spacingX) / 2);

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;
