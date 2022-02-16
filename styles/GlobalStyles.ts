import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
 ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 16px;
    background: radial-gradient(circle, rgba(0,0,3,1) 0%, rgba(170,119,28,1) 0%, rgba(252,246,186,1) 21%, rgba(251,245,183,1) 46%, rgba(255,255,255,1) 100%);
    color: ${(props) => props.theme.colors.text.primary};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
