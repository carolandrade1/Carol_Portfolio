import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints';

export const ProjetosPrincipais = styled.div`
    display: flex;
    justify-content: flex-end;
    max-width: 650px;
    max-height: 480px;
    padding-bottom: 120px;
    transform: translateY(65px);

    img {
        height: 100%;
        width: 100%;
        margin-bottom: 20px;
    }
`;

const ListaProjetos = styled.ul`
    padding-top: 0;

    .itemsProjetos {
        display: flex;
        position: relative;
        padding: 20px 0;
        justify-content: center;
        border-bottom: none;

        ${breakpointsMedia({
    md: css`
        justify-content: space-between;
        align-items: center;
        padding: 30px 20px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.fonts.light.color};
    `,
  })}
    }

    img {
        display: initial;
        width: 290px;

    ${breakpointsMedia({
    md: css`
        display: none;
        width: 290px;
        height: 170px;
    `,
  })}
    }

    .itemsProjetos:hover img {

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

export const Efeito = styled.p`
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

        &:hover {
            &:before {
            width: 220px;
            background: ${({ theme }) => theme.colors.details.main.color};
            }
        }
        &:active {
            transform: scale(.96);
        }

        span {
            position: relative;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 2px;
            text-transform: uppercase;
            vertical-align: middle;
        }
`;

export default ListaProjetos;
