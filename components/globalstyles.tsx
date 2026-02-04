import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    --white: #e0e0e0;
    --darkgrey: #707070;
    --highlight: #0000ff;
    --dark: #0d0d0d;
  
    font-family: "Roboto Mono", monospace;
    font-size: 1rem;
    font-weight: 400;
    padding: 2rem;
    margin: 0 0;
    background: var(--dark) 0% 0% no-repeat padding-box;
    color: var(--white);
    line-height: 1.75rem;
  }

  a {
    text-decoration: none;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    cursor: pointer;
    color: var(--white);
    border-bottom: 1px solid var(--white);
    padding-bottom: 0;
  
    :hover {
      border-bottom: 1px solid var(--highlight);
    }
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
