import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints';

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
    text-align: left;
    max-width: auto;

    ${breakpointsMedia({
    md: css`
        max-width: 600px;
        margin-top: 20px;
    `,
  })}

    h1 {
        color: ${({ theme }) => theme.colors.details.main.color};
    }

    .contato {
        margin-bottom: 15px;
    }
`;

export default TextContainer;
