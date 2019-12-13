import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root  {
    min-height: 100%;
  }

  body {
    background: rgb(232,85,139);
background: linear-gradient(45deg, rgba(232,85,139,1) 0%, rgba(118,84,156,1) 50%, rgba(12,165,231,1) 100%);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
