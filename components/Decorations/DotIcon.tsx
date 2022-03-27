import type { CSSProperties } from "react";
import styled from "styled-components";

interface DotIconProps {
  variant?: "primary" | "success";
}

const _STYLES = {
  primary: {
    "--bgColor": `var(--clr-primary-100)`,
    "--borderColor": `var(--clr-primary-50)`,
  },
  success: {
    "--bgColor": `var(--clr-yellow-100)`,
    "--borderColor": `var(--clr-yellow-50)`,
  },
};

const DotIcon: React.FC<DotIconProps> = ({ variant = "primary" }) => {
  const styles = _STYLES[variant];

  return <Wrapper style={styles as CSSProperties}></Wrapper>;
};

const Wrapper = styled.div`
  background-color: var(--bgColor);
  border: 8px solid var(--borderColor);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
`;

export default DotIcon;
