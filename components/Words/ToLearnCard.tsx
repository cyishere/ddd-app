import Link from "next/link";

import type { Set } from "@/utils/types";
import { useGetWordsQuery } from "graphql/generated/graphql";
import Card from "../Card";

interface WordCardProps {
  set: Set;
}

const WordCard: React.FC<WordCardProps> = ({ set }) => {
  const { data } = useGetWordsQuery({
    variables: {
      set_id: set.id,
    },
  });

  // if words in this set are all be learned, hide it
  if (data?.words.every((word) => !word.unstarted)) {
    return null;
  }

  const unstartedWords = data?.words.filter((word) => word.unstarted);
  const startedWords = data?.words.filter((word) => !word.unstarted);

  const number = `${unstartedWords?.length || 0} / ${data?.words.length || 0}`;
  const percentage = Math.round(
    ((startedWords?.length || 0) / (data?.words.length || 1)) * 100
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

export default WordCard;
