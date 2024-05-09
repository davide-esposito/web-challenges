import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Theme Colors */
    --color-earth: #282828; 
    --color-clouds: #f1f1f1; 
    --color-smoke: #d4d1cd; 
    --color-link: #000000; 

    /* Font styles */
    --font-family: 'Lora', serif;

    /* Text Styles */
    --font-headline-1: normal 700 44px/48px var(--font-family);
    --font-headline-2: normal 700 32px/41px var(--font-family);
    --font-title: normal 700 16px/20px var(--font-family);
    --font-caption: normal 500 20px/23px var(--font-family);
    --font-body: normal 400 16px/20px var(--font-family);

    /* Effects */
    --box-shadow-book: 0 4px 8px -2px rgba(0, 0, 0, 0.09);
    --box-shadow-book--hover: 0 6px 11px -2px rgba(0, 0, 0, 0.12);
  }

  body {
    background-color: var(--color-smoke);
    color: var(--color-earth);
    margin: 0;
    font-family: var(--font-family);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-smoke: #333333; 
      --color-earth: #d4d1cd; 
      --color-link: #d4d1cd;
    }
  }
`;
