import type { GenderTypes } from "@/utils/types";

export interface StylesTypes {
  default: Record<string, string>;
  feminine: Record<string, string>;
  neuter: Record<string, string>;
  masculine: Record<string, string>;
}

export const _STYLES: StylesTypes = {
  default: {
    "--bgColor": "var(--clr-gray-50)",
    "--primaryColor": "var(--clr-gray-900)",
    "--secondaryColor": "var(--clr-gray-700)",
  },
  feminine: {
    "--bgColor": "var(--clr-blue-50)",
    "--primaryColor": "var(--clr-blue-900)",
    "--secondaryColor": "var(--clr-blue-700)",
  },
  neuter: {
    "--bgColor": "var(--clr-green-50)",
    "--primaryColor": "var(--clr-green-900)",
    "--secondaryColor": "var(--clr-green-700)",
  },
  masculine: {
    "--bgColor": "var(--clr-red-50)",
    "--primaryColor": "var(--clr-red-700)",
    "--secondaryColor": "var(--clr-red-500)",
  },
};

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
