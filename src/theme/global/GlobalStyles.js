import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  };

  ${normalize}

  html {
    scroll-behavior: smooth;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Sora', sans-serif;
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  body {
    background: linear-gradient(132deg, #E0E0E0, #96a7cf, #E0E0E0);
    background-size: 100% 100%;
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    padding:0;
    margin:0px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fonts.main.color};
  }

  h1, h2, h3, h4 {
    line-height: 1.15;
    margin: 0px;
  }

  p {
    margin: 0;
  }
  
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
