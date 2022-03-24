import Link from "next/link";

import type { Set } from "@/utils/types";
import { useGetStartedUnlearnedWordsQuery } from "@/graphql/generated/graphql";
import Card from "../Card";

interface ToReviewCardProps {
  set: Set;
}

const ToReviewCard: React.FC<ToReviewCardProps> = ({ set }) => {
  const { data } = useGetStartedUnlearnedWordsQuery({
    variables: { set_id: set.id },
  });

  if (!data || data.words.length === 0) {
    return null;
  }

  const number = data.words.length;

  return (
    <Link href={`/set/${set.slug}`} passHref>
      <a>
        <Card color="green" title={set.name} number={number.toString()} />
      </a>
    </Link>
  );
};

export default ToReviewCard;
