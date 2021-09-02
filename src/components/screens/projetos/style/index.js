import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints';

export const ProjetoPrincipal = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 650px;
    max-height: 480px;
    padding-bottom: 20px;
    margin: 0 auto;

    ${breakpointsMedia({
    md: css`
        padding-bottom: 120px;
        margin-right: 0;

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
        margin-bottom: 20px;
    `,
  })}
    }

    p {
        max-width: 300px;
        line-height: 1.1;
        letter-spacing: 1px;
        padding: 10px;
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

export const Seta = styled.div`

    svg {
        display: none;
        transform: rotate(134deg);

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
        padding: 30px 20px;
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
        width: 290px;
        height: 200px;
        box-shadow: none;
    `,
  })}
    }

    .itemsProjetos:hover img {
        display: initial;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h2 {
        padding: 15px 0;
    }

    p {
        max-width: 300px;
        line-height: 1.1;
        letter-spacing: 1px;
        text-align: justify;

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
