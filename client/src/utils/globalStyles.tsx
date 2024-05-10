import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F5F3F3;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6, span, label {
    font-family: helvetica;
    color: #2E2E2E;
  }
  a, p, span {
    font-family: 'helvetica';
    color: #515151;
    text-decoration: none;
  }

  span {
    color: #FFFFFF;
    font-size: 1.1rem;
  }
`;