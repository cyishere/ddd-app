import type { CSSProperties } from "react";
import styled from "styled-components";

import type { GenderTypes, Word } from "@/utils/types";
import { getGender } from "./WordContent.helpers";

interface WordContentProps {
  word: Word;
}

interface StylesTypes {
  default: Record<string, string>;
  feminine: Record<string, string>;
  neuter: Record<string, string>;
  masculine: Record<string, string>;
}

const _STYLES: StylesTypes = {
  default: {
    "--bgColor": "var(--clr-gray-50)",
    "--primaryColor": "var(--clr-gray-900)",
    "--secondaryColor": "var(--clr-gray-700)",
  },
  feminine: {
    "--bgColor": "var(--clr-blue-50)",
    "--primaryColor": "var(--clr-blue-900)",
    "--secondaryColor": "var(--clr-blue-700)",
  },
  neuter: {
    "--bgColor": "var(--clr-green-50)",
    "--primaryColor": "var(--clr-green-900)",
    "--secondaryColor": "var(--clr-green-700)",
  },
  masculine: {
    "--bgColor": "var(--clr-red-50)",
    "--primaryColor": "var(--clr-red-700)",
    "--secondaryColor": "var(--clr-red-500)",
  },
};

const WordContent: React.FC<WordContentProps> = ({ word }) => {
  let gender: GenderTypes | "default" = "default";

  if (word) {
    gender = getGender(word.article) as GenderTypes;
  }

  const styles = _STYLES[gender];

  return (
    <WordContainer style={styles as CSSProperties}>
      {word ? (
        <>
          <Article>{word.article}</Article>
          <German>{word.german}</German>
          <English>{word.english}</English>
        </>
      ) : null}
    </WordContainer>
  );
};

const WordContainer = styled.div`
  background-color: var(--bgColor);
  border-radius: 8px;
  padding: var(--spacing);
  width: min(100%, 600px);
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Article = styled.span`
  font-size: 1.5rem;
  line-height: 1.33;
  font-weight: 500;
  color: var(--secondaryColor);
`;

const German = styled.span`
  font-size: 1.25rem;
  line-height: 1.267;
  font-weight: 600;
  color: var(--primaryColor);
  margin-bottom: 1rem;
`;

const English = styled.span`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  color: var(--clr-gray-500);
`;

export default WordContent;
