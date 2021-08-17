import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  };

  ${normalize}

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif; //'Sora', sans-serif;
    background-color: ${({ theme }) => theme.colors.background.main.color};
    display: flex;
    min-height: 100vh;
    width: 100%;
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
  
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
