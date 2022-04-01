import type { CSSProperties } from "react";
import styled from "styled-components";

import { TextSmMedium } from "../Typography";

interface BadgeProps {
  color?: "default" | "primary" | "green" | "yellow";
}

const _STYLES = {
  default: {
    "--bgColor": `var(--clr-gray-100)`,
    "--color": `var(--clr-gray-500)`,
  },
  primary: {
    "--bgColor": `var(--clr-primary-50)`,
    "--color": `var(--clr-primary-600)`,
  },
  green: {
    "--bgColor": `var(--clr-green-50)`,
    "--color": `var(--clr-green-500)`,
  },
  yellow: {
    "--bgColor": `var(--clr-yellow-50)`,
    "--color": `var(--clr-yellow-300)`,
  },
};

const Badge: React.FC<BadgeProps> = ({ color = "default", children }) => {
  const styles = _STYLES[color];
  return <Wrapper style={styles as CSSProperties}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  ${TextSmMedium}
  color: var(--color);
  background-color: var(--bgColor);
  border-radius: 1rem;
  padding: 2px 8px;
  display: inline-block;
`;

export default Badge;
