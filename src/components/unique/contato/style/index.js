import styled from 'styled-components';

export const ContatoModal = styled.div`

    strong {
        position: relative;
        opacity: 1;

        &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: -8px;
            right: -8px;
            height: 12px;
            opacity: 0.8;
            z-index: -1;

            background-image: url('https://i.postimg.cc/fbcgwf5p/Vector.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
        }
    }

    @keyframes animate 
    {
        0%, 10%, 100% {
            width: 0;
        }
        70%, 90% {
            width: 100%
        }
    }


    



`;

const RedesSociais = styled.div`
    padding: 20px 0;

    a {
        padding: 10px;
    }
`;

export default RedesSociais;
