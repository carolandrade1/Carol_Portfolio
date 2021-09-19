import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints/breakpoints';

const ContainerHero = styled.section`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 82vh;
    padding: 20px 0;
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
        padding: 80px;
        flex-direction: row;
        &::-webkit-scrollbar {
          display: none;
        }
    `,
  })}

`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    max-width: auto;

    ${breakpointsMedia({
    md: css`
      max-width: 600px;
      padding: 0 20px;
    `,
  })}

    p {
      text-align: justify;
      line-height: 1.5;

    ${breakpointsMedia({
    md: css`
      max-width: 550px;
    `,
  })}
    }
    .contato {
      width: 130px;
      margin-bottom: 15px;
      position: relative;
      padding: 8px 12px;
      transition: all .2s ease;
      cursor: pointer;

    ${breakpointsMedia({
    md: css`
    padding: 8px 12px;
    `,
  })}
      &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          border-radius: 28px;
          background: ${({ theme }) => theme.colors.details.main.color};
          width: 35px;
          height: 35px;
          transition: all .3s ease;
      }
      span {
          position: relative;
          font-weight: 500;
          line-height: 18px;
          letter-spacing: 2px;
          text-transform: uppercase;
          vertical-align: middle;
      }
      &:hover {
          &:before {
          width: 100%;
          background: ${({ theme }) => theme.colors.details.main.color};
          }
      }
      &:active {
          transform: scale(.96);
      }
  }
`;

export default ContainerHero;
