import type { GenderTypes } from "./types";

export const getGender = (article: "die" | "das" | "der"): GenderTypes => {
  switch (article) {
    case "die":
      return "feminine";

    case "das":
      return "neuter";

    case "der":
      return "masculine";
  }
};
