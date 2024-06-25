import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.grayBackground};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6, span, label, a, p {
    font-family: helvetica;
    color: ${props => props.theme.primaryFontColor};
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
  a {
    text-decoration: none;
  }
  span {
    color: #FFFFFF;
    font-size: 1.1rem;
  }
`;