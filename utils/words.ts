interface WordType {
  id: number;
  article: "die" | "das" | "der";
  german: string;
  english: string;
}
export const words: WordType[] = [
  {
    id: 1,
    article: "das",
    german: "Wasser",
    english: "water",
  },
  {
    id: 2,
    article: "die",
    german: "Mutter",
    english: "mother",
  },
  {
    id: 3,
    article: "der",
    german: "Frühling",
    english: "spring",
  },
];
