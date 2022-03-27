import type { Set } from "@/utils/types";
import Card from "../Card";

interface LearnedCardProps {
  set: Set;
}

const LearnedCard: React.FC<LearnedCardProps> = ({ set }) => {
  return (
    <Card
      title={set.name}
      number={(set.words?.length || 0).toString()}
      percentage="100%"
    />
  );
};

export default LearnedCard;
