import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints/breakpoints';

const ContainerSobre = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 82vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }
    &::-webkit-scrollbar-thumb:active {
      background: #000000;
    }
    &::-webkit-scrollbar-button {
      width: 12px;
      height: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background: #ffffff;
      border: 17px none #ffffff;
      border-radius: 50px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      border: 16px none #ffffff;
      border-radius: 50px;
    }
    &::-webkit-scrollbar-corner {
      background: transparent;
    }
  }

  ${breakpointsMedia({
    md: css`
      padding: 0 40px;
      
      h1 {
        margin-bottom: 50px;
      }
      
      &::-webkit-scrollbar {
        display: none;
      }
    `,
  })}

  
`;

export const Info = styled.div`
  order: 2;
  padding-right: 0;

  ${breakpointsMedia({
    md: css`
      order: 1;
      padding-right: 30px; 
    `,
  })}
`;

export const Descricao = styled.div`
  margin-bottom: 40px;

  p {
    line-height: 1.3;
    letter-spacing: 1px;
    text-align: justify;
    max-width: 600px;
    padding: 15px 0;
    margin: 0 auto;

    ${breakpointsMedia({
    md: css`
      gap: 25px;
      margin: 0 auto;
    `,
  })}
  }

`;

export const Canais = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-self: start;
  gap: 18px;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  ${breakpointsMedia({
    md: css`
      gap: 25px;
  `,
  })}
  
  a {
    position: relative;
  }

  img {
    display: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;

    &:hover {
      display: none;
    }
  }

  a:hover img {
    display: initial;
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -150%);
  }
`;

export const Image = styled.div`
  order: 1;
  margin: 0 auto;

  ${breakpointsMedia({
    md: css`
      order: 2;
    `,
  })}

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;

    ${breakpointsMedia({
    md: css`
      width: 320px;
      height: 320px;
      border-radius: 50%;
    `,
  })}
  }
`;

export default ContainerSobre;
