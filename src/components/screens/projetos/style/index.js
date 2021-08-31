import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints';

const ListaProjetos = styled.ul`
    flex-basis: 60%;
    padding-top: 0;

    .itemsProjetos {
        position: relative;
        padding: 20px 0;
        justify-content: center;
        border-bottom: 1px solid ${({ theme }) => theme.colors.details.main.color};

        ${breakpointsMedia({
    md: css`
        justify-content: space-between;
        padding: 30px 20px;
    `,
  })}
    }

    img {
        width: 270px;
        height: 150px;

    ${breakpointsMedia({
    md: css`
        width: 290px;
        height: 170px;
    `,
  })}
    }

    .img {
        display: block;
        margin: 0 auto;

    ${breakpointsMedia({
    md: css`
        display: none;
    `,
  })}
    }

    .itemsProjetos:hover .img {
      display: block;

      ${breakpointsMedia({
    md: css`
        z-index: 3;
        display: initial;
        position: absolute;
        top: -5px;
        left: 62%;
    `,
  })}
    }

    p {
        max-width: 300px;
        line-height: 1.1;
        letter-spacing: 1px;
        padding: 10px;
    }
`;

export const LinkA = styled.a`
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
`;

export default ListaProjetos;
