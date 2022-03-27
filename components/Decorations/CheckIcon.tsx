import type { CSSProperties } from "react";
import styled from "styled-components";
import { Check } from "react-feather";

interface CheckIconProps {
  variant?: "primary";
}

const _STYLES = {
  primary: {
    "--bgColor": `var(--clr-primary-100)`,
    "--color": `var(--clr-primary-500)`,
  },
};

const CheckIcon: React.FC<CheckIconProps> = ({ variant = "primary" }) => {
  const styles = _STYLES[variant];

  return (
    <Wrapper style={styles as CSSProperties}>
      <Check size={14} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--bgColor);
  color: var(--color);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-content: center;
`;

export default CheckIcon;
