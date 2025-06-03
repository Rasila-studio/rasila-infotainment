import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* CSS Reset (modern) */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #fefefe;
    color: #222;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    line-height: 1.6;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyles;
