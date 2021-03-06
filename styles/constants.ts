export const FONTS = {
  primary: `'Inter', sans-serif`,
  special: `'Lora', serif`,
};

export const COLORS = {
  white: "0deg 0% 100%",
  gray: {
    25: "210deg 20% 99%",
    100: "220deg 22% 96%",
    200: "220deg 17% 93%",
    300: "216deg 16% 84%",
    500: "220deg 13% 46%",
    700: "217deg 23% 27%",
    800: "215deg 32% 17%",
    900: "211deg 43% 11%",
  },
  primary: {
    50: "264deg 100% 98%",
    100: "267deg 100% 96%",
    500: "260deg 77% 70%",
    600: "259deg 64% 59%",
    700: "258deg 54% 52%",
  },
  green: {
    50: "144deg 83% 98%",
    500: "152deg 82% 39%",
    700: "155deg 96% 24%",
    900: "156deg 88% 16%",
  },
  blue: {
    50: "206deg 100% 97%",
    700: "218deg 80% 46%",
    900: "218deg 68% 31%",
  },
  red: {
    50: "4deg 88% 97%",
    500: "4deg 86% 58%",
    700: "4deg 76% 40%",
  },
  yellow: {
    50: "48deg 100% 96%",
    100: "48deg 98% 89%",
    300: "42deg 99% 65%",
  },
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
};
