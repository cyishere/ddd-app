import type { CSSProperties } from "react";
import styled from "styled-components";

import UnstyledButton from "./UnstyledButton";

interface ButtonProps {
  variant?: "default" | "primary" | "success" | "error";
  size?: "normal" | "large";
}

const STYLES = {
  default: {
    "--color": `var(--clr-gray-700)`,
    "--borderColor": `var(--clr-gray-300)`,
    "--bgColor": `var(--clr-white)`,
  },
  primary: {
    "--color": `var(--clr-white)`,
    "--borderColor": `var(--clr-primary-600)`,
    "--bgColor": `var(--clr-primary-600)`,
  },
  success: {
    "--color": `var(--clr-white)`,
    "--borderColor": `var(--clr-yellow-300)`,
    "--bgColor": `var(--clr-yellow-300)`,
  },
  error: {
    "--color": `var(--clr-white)`,
    "--borderColor": `var(--clr-gray-500)`,
    "--bgColor": `var(--clr-gray-500)`,
  },
  active: {
    "--color": `var(--clr-primary-700)`,
    "--borderColor": `var(--clr-primary-500)`,
    "--bgColor": `var(--clr-primary-50)`,
  },
};

const SIZES = {
  normal: {
    "--fontSize": "1rem",
    "--fontWeight": 500,
    "--padding": "10px 16px",
  },
  large: {
    "--fontSize": "1.875rem",
    "--fontWeight": 600,
    "--padding": "16px 32px",
  },
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "normal",
  children,
}) => {
  const _styles = { ...STYLES[variant], ...SIZES[size] };

  return <Wrapper style={_styles as CSSProperties}>{children}</Wrapper>;
};

const Wrapper = styled(UnstyledButton)`
  font-size: var(--fontSize);
  font-weight: var(--fontWeight);
  color: var(--color);
  padding: var(--padding);
  border-style: solid;
  border-width: 1px;
  border-color: var(--borderColor);
  background-color: var(--bgColor);
  border-radius: 0.5rem;
  box-shadow: var(--bs-sm);
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 8px;

  &:hover {
    box-shadow: var(--bs-lg);
  }
`;

export default Button;
