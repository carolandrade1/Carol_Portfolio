import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints/breakpoints';

const ContainerContato = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 82vh;
    /* overflow-y: scroll; */
    text-align: center;
    margin-top: 50px;

    ${breakpointsMedia({
    md: css`
        margin-top: 50px;
        padding: 40px;
    `,
  })}
`;

export const ContatoModal = styled.div`
    position: relative;

    #contato:hover {
        text-shadow: 2px 2px 4px black;
        /* color: ${({ theme }) => theme.colors.details.main.color}; */
    }

`;

export const RedesSociais = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    ${breakpointsMedia({
    md: css`
        width: 500px;
        margin: 0 auto;
    `,
  })}
`;

export default ContainerContato;
