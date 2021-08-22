import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints';

const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    z-index: 15;
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.colors.background.main.color};

    ${breakpointsMedia({
    md: css`
        background: none;
    `,
  })}
`;

export default MenuWrapper;