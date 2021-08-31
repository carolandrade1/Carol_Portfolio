import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints';

const Erro = styled.div`
    margin-bottom: 100px;

    .quatroZeroQuatro {
        font-size: 100px;
        font-weight: 700;

    ${breakpointsMedia({
    md: css`
        font-size: 150px;
    `,
  })}
    }
`;

export const GoBack = styled.div`
    justify-content: center;
    margin: 0 auto;
    width: 130px;

    &:hover img {
        display: initial;
        position: absolute;
        top: -50px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }

    img {
        display: none;
        width: 250px;
        height: 200px;

    ${breakpointsMedia({
    md: css`
        width: 330px;
        height: 280px;
    `,
  })}
    }
`;

export default Erro;
