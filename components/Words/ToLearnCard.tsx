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

  const unstartedWords = data?.words.filter((word) => word.unstarted);
  const startedWords = data?.words.filter((word) => !word.unstarted);

  const number = `${unstartedWords?.length || 0} / ${data?.words.length || 0}`;
  const percentage =
    ((startedWords?.length || 0) / (data?.words.length || 1)) * 100;

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
