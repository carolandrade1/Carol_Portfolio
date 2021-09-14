import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints/breakpoints';

const Info = styled.div`
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
        transform: translateY(-50px);

    ${breakpointsMedia({
    md: css`
        width: 45%;
        padding-bottom: 50px;
    `,
  })}
    }
`;

export default Info;
