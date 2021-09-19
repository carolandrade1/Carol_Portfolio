import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints/breakpoints';

const Container404 = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    margin: 0 auto;
`;

export const Erro = styled.div`

    img {
        width: 100%;

    ${breakpointsMedia({
    md: css`
        width: 80%;
    `,
  })}
    }
`;

export const GoBack = styled.div`
    justify-content: center;
    margin: 0 auto;

    &:hover img {
        display: none;

    ${breakpointsMedia({
    md: css`
        display: initial;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    `,
  })}
    }

    img {
        display: none;

    ${breakpointsMedia({
    md: css`
        width: 400px;
        height: 350px;
    `,
  })}
    }
`;

export default Container404;
