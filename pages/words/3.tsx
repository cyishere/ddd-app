import type { NextPage } from "next";

import { words } from "@/utils/words";
import { AppWordPage } from "@/components/Layout";

const Word: NextPage = () => {
  const word = words.find((w) => w.id === 3);
  const nextUrl = words.find((w) => w.id === 1)!.id.toString();

  return <AppWordPage word={word} nextUrl={nextUrl} />;
};

export default Word;
