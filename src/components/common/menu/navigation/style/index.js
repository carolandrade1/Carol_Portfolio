import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../../theme/util/breakpoints/breakpoints';

const Ul = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.details.main.color};
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding: 10vh;
  z-index: 3;
  text-align: center;
  opacity: 0;
  animation: fadeInRight 0.5s ease-in-out forwards;

  ${breakpointsMedia({
    md: css`
      flex: 0;
      flex-flow: row nowrap;
      /* justify-content: flex-start; */
      height: 8vh;
      padding: 10px 0;
      align-items: center;
      opacity: 1;
      animation: none;
      transform: translateX(0);
      position: relative;
      background-color: transparent;
    `,
  })}

  li {
    font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
    padding: 20px 0;
    opacity: 0;
    animation: fadeInRight 1s ease-in-out forwards;

    &:hover {
      font-weight: 600;
      transform: scale(1.1);
    }

    ${breakpointsMedia({
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.paragraph3.fontSize};
      opacity: 1;
      animation: none;
      padding: 0 15px;
      /* align-self: flex-end; */
    `,
  })}
  }

    @keyframes fadeInRight {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    p:hover {
      color: ${({ theme }) => theme.colors.details.main.color};
    }
`;

export default Ul;
