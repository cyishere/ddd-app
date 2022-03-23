import Link from "next/link";

import type { Set } from "@/utils/types";
import { useGetStartedWordsQuery } from "graphql/generated/graphql";
import Card from "../Card";

interface ToReviewCardProps {
  set: Set;
}

const ToReviewCard: React.FC<ToReviewCardProps> = ({ set }) => {
  const { data } = useGetStartedWordsQuery({ variables: { set_id: set.id } });

  const number = data?.words.length || 0;
  const percentage = number / 100;

  return (
    <Link href={`/set/${set.slug}`} passHref>
      <a>
        <Card
          color="green"
          title={set.name}
          number={number.toString()}
          percentage={`${percentage}%`}
        />
      </a>
    </Link>
  );
};

export default ToReviewCard;
