import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import type { Set } from "@/utils/types";
import {
  useGetMemorizedWordsLazyQuery,
  useGetWordsLazyQuery,
} from "graphql/generated/graphql";
import Card from "../Card";
import Loader from "../Loader";

interface WordCardProps {
  set: Set;
  userId: string;
}

const WordCard: React.FC<WordCardProps> = ({ set, userId }) => {
  const [started, setStarted] = useState(0);
  const [all, setAll] = useState(0);

  const [
    getStartedWords,
    { data: startedWords, loading: startedLoading, error: startedError },
  ] = useGetMemorizedWordsLazyQuery();

  const [getAllWords, { data: allData, loading: allLoading, error: allError }] =
    useGetWordsLazyQuery();

  useEffect(() => {
    if (userId && set) {
      getStartedWords({ variables: { user_id: userId, set_id: set.id! } });
      getAllWords({ variables: { set_id: set.id! } });
    }
  }, [getAllWords, getStartedWords, set, userId]);

  useEffect(() => {
    if (
      startedWords &&
      startedWords.memorizedWords &&
      allData &&
      allData.words
    ) {
      setStarted(startedWords.memorizedWords.length);
      setAll(allData.words.length);
    }
  }, [allData, startedWords]);

  if (startedLoading || allLoading) {
    return <Loader />;
  }

  if (startedError || allError) {
    return (
      <ErrorText>
        {startedError
          ? startedError.message
          : allError
          ? allError.message
          : null}
      </ErrorText>
    );
  }

  // if words in this set are all be learned, hide it
  if (started === all) {
    return null;
  }

  const number = `${(all - started).toString()}/${all.toString()}`;
  const percentage = Math.round(
    ((all - started) / (all === 0 ? 1 : all)) * 100
  );

  return (
    <Link href={`/set/${set.slug}`} passHref>
      <a>
        <Card
          color="yellow"
          title={set.name}
          number={number}
          percentage={`${percentage}%`}
        />
      </a>
    </Link>
  );
};

const ErrorText = styled.span`
  color: var(--clr-red-500);
`;

export default WordCard;
