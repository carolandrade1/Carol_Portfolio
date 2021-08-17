import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/util/breakpoints';

const Box = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;

    ${breakpointsMedia({
    md: css`
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1400px;
    `,
  })}
`;

export default Box;
