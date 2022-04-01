import { MutableRefObject, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

import type { Set } from "@/utils/types";
import { useGetUnfinishedWordsQuery } from "@/graphql/generated/graphql";
import { reviewAvailable } from "@/utils/helpers";
import Card from "../Card";

interface ToReviewCardProps {
  set: Set;
  userId: string;
  setsStarted: MutableRefObject<boolean[]>;
}

const ToReviewCard: React.FC<ToReviewCardProps> = ({
  set,
  userId,
  setsStarted,
}) => {
  const { data: startedWords } = useGetUnfinishedWordsQuery({
    variables: { set_id: set.id!, user_id: userId },
  });
  const [unstarted, setUnstarted] = useState(true);
  const [wordsNumber, setWordsNumber] = useState(0);

  useEffect(() => {
    if (startedWords && startedWords.memorizedWords.length > 0) {
      const availableWords = startedWords.memorizedWords.filter((word) =>
        reviewAvailable(word.available_at)
      );
      setUnstarted(false);
      setsStarted.current.push(true);
      setWordsNumber(availableWords.length);
    } else {
      setsStarted.current.push(false);
    }
  }, [setsStarted, startedWords]);

  return (
    <>
      {!unstarted ? (
        <Link href={`/review/${set.slug}`} passHref>
          <a>
            <Card
              color="green"
              title={set.name}
              number={wordsNumber.toString()}
            />
          </a>
        </Link>
      ) : null}
    </>
  );
};

export default ToReviewCard;
