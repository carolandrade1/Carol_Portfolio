import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints/breakpoints';

const ContainerCasePortfolio = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: justify;
    height: 82vh;
    overflow-y: scroll;

    ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      padding: 0 40px;
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

  .finalText {
    margin-bottom: 50px;
  }

`;

export const Info = styled.div`
    order: 2;
    width: 100%;

    ${breakpointsMedia({
    md: css`
      width: 45%;
    `,
  })}

    div {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    p {
      margin-bottom: 8px;
    }
`;

export const LogoImage = styled.div`
    display: flex;
    justify-content: center;
    width: 45%;
    margin: 0 auto;
    order: 1;

    img {
      width: 40%;
      margin-bottom: 25px;

    ${breakpointsMedia({
    md: css`
      width: 30%;
    `,
  })}
    }
`;

export const Description = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2{
        padding: 10px 0;
    }

    p {
        flex-basis: none;
        text-align: justify;
        line-height: 1.5;
        padding-bottom: 30px;

    ${breakpointsMedia({
    md: css`
        flex-basis: 45%;
    `,
  })}
    }

    .list {
        padding-bottom: 80px;
    }

    span {
        font-size: 14px;
    }
`;

export const Referencia = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-self: start;
  gap: 18px;
  width: 100%;

    ${breakpointsMedia({
    md: css`
      width: 45%;
      gap: 22px;
    `,
  })}
`;

export const Image = styled.div`
  display: flex;
  justify-content: right;

    img {
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.20) -2px 2px 4px;
      transform: translateY(-80px);

    ${breakpointsMedia({
    md: css`
      width: 45%;
      transform: translateY(-180px);
    `,
  })}
    }
`;

export default ContainerCasePortfolio;
