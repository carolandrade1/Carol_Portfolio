import styled from 'styled-components';

export const ContatoModal = styled.div`

    #contato {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: -8px;
            right: -8px;
            height: 12px;
            z-index: -1;

            background-image: url('https://i.postimg.cc/fbcgwf5p/Vector.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
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
