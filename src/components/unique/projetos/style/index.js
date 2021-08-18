import styled from 'styled-components';

const ListaProjetos = styled.div`
    flex-basis: 60%;

    .itemsProjetos {
        position: relative;
        padding: 25px 20px;
        border-bottom: 1px solid black;

        /* &:hover {
            background-image: url('/images/LoginDesktop3-4.png');
            background-size: cover;
            background-position: center center;
        } */
    }

    svg {
        transform: rotate(-90deg);
    }

    .img {
        display: none;
    }

    .itemsProjetos:hover .img {
        z-index: 3;
        display: initial;
        position: absolute;
        top: -15%;
        left: 40%;
    }
`;

export default ListaProjetos;
