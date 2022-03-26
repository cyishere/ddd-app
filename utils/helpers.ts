import type { GenderTypes } from "./types";

export const getGender = (article: string): GenderTypes | undefined => {
  switch (article) {
    case "die":
      return "feminine";

    case "das":
      return "neuter";

    case "der":
      return "masculine";
  }
};
