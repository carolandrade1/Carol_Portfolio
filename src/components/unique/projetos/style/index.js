import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints';

const ListaProjetos = styled.ul`
    flex-basis: 60%;

    .itemsProjetos {
        position: relative;
        padding: 25px 20px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.svg.main.color};

    }

    svg {
        transform: rotate(-90deg);
    }

    .img {
        display: none;
    }

    .itemsProjetos:hover .img {
        display: none;

        ${breakpointsMedia({
    md: css`
            z-index: 3;
            display: initial;
            position: absolute;
            top: -15%;
            left: 40%;
            `,
  })}
    }

    .itemsProjetos:hover .linkSvg {
        transform: rotate(-45deg);
        background-color: #D2AFFF;
        border-radius: 50%;
        transition: ease-in-out .5s ;
    }
`;

export default ListaProjetos;
