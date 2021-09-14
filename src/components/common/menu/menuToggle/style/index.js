import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../../theme/util/breakpoints/breakpoints';

const StyledBurger = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    width: 30px;
    height: 25px;
    z-index: 20;

    ${breakpointsMedia({
    md: css`
      display: none;
    `,
  })}

    div {
      cursor: pointer;
      width: 30px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.svg.main.color};
      transform-origin: 4px;
      transition: all 0.3s linear;
      z-index: 20;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }

      &:nth-child(2) {
        transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
        opacity: ${({ open }) => (open ? 0 : 1)};
        width: 20px;
        margin: 0 auto;
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
`;

export default StyledBurger;
