import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints';

export const ProjetoPrincipal = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 650px;
    max-height: 380px;
    padding-bottom: 20px;
    margin: 0 auto;
    transform: none;

    ${breakpointsMedia({
    md: css`
        margin-right: 0;
        transform: translateY(-100px);

        &:hover {
            opacity: 1;
        }

        &:hover svg{
            transform: rotate(0);
            background-color: ${({ theme }) => theme.colors.details.main.color};
        }
    `,
  })}

    img {
        display: initial;
        width: 290px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    ${breakpointsMedia({
    md: css`
        height: 100%;
        width: 100%;
    `,
  })}
    }

    p {
        max-width: 300px;
        line-height: 1.1;
        letter-spacing: 1px;
    }

    h2 {
        padding: 15px 0;
    }

    svg {
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
`;

export const Seta = styled.a`
    width: 80px;

    svg {
        display: none;
        transform: rotate(134deg);
        border-radius: 50%;

        &:hover {
            background-color: ${({ theme }) => theme.colors.details.main.color};
        }

    ${breakpointsMedia({
    md: css`
        display: initial;
    `,
  })}
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
        padding: 20px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.fonts.light.color};
    `,
  })}
    }
    

    img {
        display: initial;
        width: 290px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    ${breakpointsMedia({
    md: css`
        display: none;
        width: 410px;
        height: 250px;
        box-shadow: none;
        z-index: 0;
        opacity: 0.9;
    `,
  })}
    }

    .itemsProjetos:hover img {

    ${breakpointsMedia({
    md: css`
        display: initial;
        position: absolute;
        top: 50%;
        left: 65%;
        transform: translate(-65%, -50%);
    `,
  })}
    }

    h2 {
        padding: 15px 0;
    }

    p {
        max-width: 300px;
        line-height: 1.1;
        letter-spacing: 1px;
        text-align: justify;
        z-index: 2;

    ${breakpointsMedia({
    md: css`
        max-width: 350px;
    `,
  })}
    }

    svg {
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

    .itemsProjetos:hover svg {
        transform: rotate(0);
        background-color: ${({ theme }) => theme.colors.details.main.color};
    }
`;

export default ListaProjetos;
