import styled from "styled-components";

import { TextLgMedium, TextMdNormal } from "../Typography";

export const PlaceholderPage = styled.div`
  ${TextLgMedium}
  color: var(--clr-gray-500);
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

export const PlaceholderText = styled.p`
  ${TextMdNormal}
  color: var(--clr-gray-500);
  text-align: center;
  padding: 2rem;
`;
