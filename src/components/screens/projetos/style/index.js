import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints/breakpoints';

const ContainerProjetos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: justify;
  height: 82vh;
  overflow-y: scroll;

    ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      padding: 0 20px;
    `,
  })}
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
`;

export const ProjetoPrincipal = styled.ul`
  flex-basis: 45%;

    .ProjetoPrincipal {
      border-bottom: 1px solid ${({ theme }) => theme.colors.fonts.main.color};
      padding-bottom: 20px;

    ${breakpointsMedia({
    md: css`
      border-bottom: none;
      padding-bottom: 0;
    `,
  })}
    }

    h2 {
      padding: 15px 0;
    }

    p {
      line-height: 1.1;
      letter-spacing: 1px;
      text-align: justify;

    ${breakpointsMedia({
    md: css`
      max-width: 450px;
    `,
  })}
    }

    img {
      width: 100%;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }

    .arrow {
      display: none;

    ${breakpointsMedia({
    md: css`
      display: initial;
      border-radius: 50%;
      transform: rotate(45deg);
      transition: ease-in-out 0.3s;
    `,
  })}
    }

    .ProjetoPrincipal:hover .arrow {
      transform: rotate(0);
      background-color: ${({ theme }) => theme.colors.details.main.color};
    }
`;

export const ListaProjetos = styled.ul`
    padding-top: 0;

    ${breakpointsMedia({
    md: css`
      padding-top: 100px;
    `,
  })}

    .itemsProjetos {
      display: flex;
      position: relative;
      padding: 20px 0;
      justify-content: center;
      border-bottom: 1px solid ${({ theme }) => theme.colors.fonts.main.color};

    ${breakpointsMedia({
    md: css`
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    `,
  })}
    }

    img {
      display: initial;
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    ${breakpointsMedia({
    md: css`
      display: none;
      width: 410px;
      height: 250px;
      box-shadow: none;
      z-index: 0;
      opacity: 0.7;
    `,
  })}
    }

    .itemsProjetos:hover img {

    ${breakpointsMedia({
    md: css`
      z-index: -1;
      display: initial;
      position: absolute;
      top: 50%;
      left: 80%;
      transform: translate(-80%, -50%);
    `,
  })}
    }

    h2 {
      padding: 15px 0;
      text-transform: capitalize;
    }

    p {
      max-width: auto;
      line-height: 1.1;
      letter-spacing: 1px;
      text-align: justify;

    ${breakpointsMedia({
    md: css`
      max-width: 450px;
    `,
  })}
    }

    .arrow {
      display: none;
    ${breakpointsMedia({
    md: css`
      display: initial;
      border-radius: 50%;
      transform: rotate(45deg);
      transition: ease-in-out 0.3s;
    `,
  })}
    }

    .itemsProjetos:hover .arrow {
      transform: rotate(0);
      background-color: ${({ theme }) => theme.colors.details.main.color};
    }
`;

export default ContainerProjetos;
