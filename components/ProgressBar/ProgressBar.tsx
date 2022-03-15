import type { CSSProperties } from "react";
import styled from "styled-components";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <Wrapper>
      <Progress>
        <Bar
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ "--width": value + "%" } as CSSProperties}
        />
      </Progress>
      <Percentage>{value}%</Percentage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Progress = styled.div`
  --height: 10px;
  --borderRadius: 5px;
  background-color: var(--clr-primary-50);
  border-radius: var(--borderRadius);
  height: var(--height);
  flex: 1;
`;

const Bar = styled.div`
  background-color: var(--clr-primary-600);
  border-radius: var(--borderRadius);
  height: var(--height);
  width: var(--width);
`;

const Percentage = styled.span`
  color: var(--clr-gray-700);
  margin-left: 1.5rem;
`;

export default ProgressBar;
