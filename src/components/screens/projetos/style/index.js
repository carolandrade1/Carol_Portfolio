import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints/breakpoints';

export const ProjetoPrincipal = styled.ul`
    flex-basis: 45%;

    .ProjetoPrincipal {
        border-bottom: 1px solid ${({ theme }) => theme.colors.fonts.light.color};
        padding: 20px 0;

    ${breakpointsMedia({
    md: css`
        border-bottom: none;
    `,
  })}
    }

    h2 {
        padding: 15px 0;
    }

    p {
        max-width: 350px;
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
        box-shadow:  15px 15px 25px #767676;
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

const ListaProjetos = styled.ul`
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
        border-bottom: 1px solid ${({ theme }) => theme.colors.fonts.light.color};

    ${breakpointsMedia({
    md: css`
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    `,
  })}
    }

    /* img {
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
    } */

    /* .itemsProjetos:hover img {

    ${breakpointsMedia({
    md: css`
        display: initial;
        position: absolute;
        top: 50%;
        left: 65%;
        transform: translate(-65%, -50%);
    `,
  })}
    } */

    h2 {
        padding: 15px 0;
        text-transform: capitalize;
    }

    p {
        max-width: 350px;
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

export default ListaProjetos;
