import { createGlobalStyle } from "styled-components";

import { COLORS, FONTS } from "./constants";

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
    html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* CUSTOM STYLES ========================= */
  html {
    /* colors */
    --clr-white: hsl(${COLORS.white});
    
    --clr-gray-25: hsl(${COLORS.gray[25]});
    --clr-gray-100: hsl(${COLORS.gray[100]});
    --clr-gray-200: hsl(${COLORS.gray[200]});
    --clr-gray-300: hsl(${COLORS.gray[300]});
    --clr-gray-500: hsl(${COLORS.gray[500]});
    --clr-gray-700: hsl(${COLORS.gray[700]});
    --clr-gray-800: hsl(${COLORS.gray[800]});
    --clr-gray-900: hsl(${COLORS.gray[900]});

    --clr-primary-50: hsl(${COLORS.primary[50]});
    --clr-primary-500: hsl(${COLORS.primary[500]});
    --clr-primary-600: hsl(${COLORS.primary[600]});
    --clr-primary-700: hsl(${COLORS.primary[700]});

    --clr-green-50: hsl(${COLORS.green[50]});
    --clr-green-500: hsl(${COLORS.green[500]});
    --clr-green-700: hsl(${COLORS.green[700]});
    --clr-green-900: hsl(${COLORS.green[900]});

    --clr-blue-50: hsl(${COLORS.blue[50]});
    --clr-blue-700: hsl(${COLORS.blue[700]});
    --clr-blue-900: hsl(${COLORS.blue[900]});

    --clr-red-50: hsl(${COLORS.red[50]});
    --clr-red-500: hsl(${COLORS.red[500]});
    --clr-red-700: hsl(${COLORS.red[700]});

    --clr-yellow-50: hsl(${COLORS.yellow[50]});
    --clr-yellow-300: hsl(${COLORS.yellow[300]});

    /* font-families */
    --ff-primary: ${FONTS.primary};

    /* box-shadows */
    --bs-sm: 0px 1px 2px hsl(${COLORS.gray[900]} / 0.06), 0px 1px 3px hsl(${COLORS.gray[900]} / 0.1);
    --bs-md: 0px 2px 4px -2px hsl(${COLORS.gray[900]} / 0.06), 0px 4px 8px -2px hsl(${COLORS.gray[900]} / 0.1);
    --bs-lg: 0px 4px 6px -2px hsl(${COLORS.gray[900]} / 0.03), 0px 12px 16px -4px hsl(${COLORS.gray[900]} / 0.08);

    --gradient-placeholder: linear-gradient(
      130deg,
      hsl(341deg 100% 61%) 0%,
      hsl(346deg 86% 69%) 9%,
      hsl(348deg 61% 73%) 21%,
      hsl(347deg 24% 75%) 35%,
      hsl(181deg 22% 75%) 52%,
      hsl(178deg 70% 72%) 67%,
      hsl(188deg 69% 71%) 79%,
      hsl(198deg 73% 72%) 88%,
      hsl(206deg 76% 72%) 94%,
      hsl(213deg 80% 71%) 98%,
      hsl(219deg 84% 71%) 100%
    );
  }

  body {
    font-family: var(--ff-primary);
    color: var(--clr-gray-900);
  }

  #__next {
    isolation: isolate;
  }

  ::selection {
    /* color: var(--clr-white);
    background-color: var(--clr-purple-primary); */
  }

  :focus {
    outline: 2px dashed;
    outline-offset: 0.25rem;
  }

  a {
    text-decoration: none;
    color: var(--clr-primary-600);
  }

  a:hover {
    text-decoration: revert;
  }

  main:focus {
    outline: none;
  }
`;

export default GlobalStyles;
