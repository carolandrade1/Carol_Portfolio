import styled from 'styled-components';

export const ContatoModal = styled.div`

    #contato:hover {
        text-shadow: 2px 2px 4px black;
        color: ${({ theme }) => theme.colors.details.main.color};
    }
`;

const RedesSociais = styled.div`
    padding: 20px 0;

    a {
        padding: 10px;
    }
`;

export default RedesSociais;
