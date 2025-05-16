import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: #000a26;
    font-size: 10px;
    font-family: 'Onest';
  }

  /* Tamanho da scrollbar */
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px !important;
  }

  /* Fundo da scrollbar */
  ::-webkit-scrollbar-track {
    background: #000a26;
  }

  /* Cor do "thumb" (parte arrastável) */
  ::-webkit-scrollbar-thumb {
    background: #d6e6f2;
    border-radius: 22px;
  }

  /* Cor do thumb ao passar o mouse */
  ::-webkit-scrollbar-thumb:hover {
    background: #a6c6d8;
  }

  /* Seleção de texto */
  ::selection {
    background: #d6e6f2;
    color: #000a26;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
