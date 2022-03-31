import { css } from "styled-components";

import { QUERIES } from "@/styles/constants";

export const CardWrapper = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing);

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
  }
`;
