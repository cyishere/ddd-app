import type { LearnedSet } from "@/utils/types";
import { useGetWordsQuery } from "@/graphql/generated/graphql";
import Card from "../Card";
import Loader from "../Loader";
import { PlaceholderText } from "../Placeholder";

interface LearnedCardProps {
  set: LearnedSet;
}

const LearnedCard: React.FC<LearnedCardProps> = ({ set }) => {
  // get all words in this set
  const { data, loading } = useGetWordsQuery({
    variables: { set_id: set.set_id },
  });

  if (loading) {
    return (
      <PlaceholderText>
        <Loader size={48} />
      </PlaceholderText>
    );
  }

  const number = `${set.words_length} / ${data?.words.length || 0}`;

  const percentage = Math.round(
    (set.words_length / (data?.words.length || 1)) * 100
  );

  return (
    <Card title={set.set_name} number={number} percentage={`${percentage}%`} />
  );
};

export default LearnedCard;
