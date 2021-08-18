import styled from 'styled-components';

const Ul = styled.ul`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-flow: column nowrap;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main.color};
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding: 10vh;
  z-index: 5;
  /* transition: ease-in-out 1s linear; */
  text-align: center;
  opacity: 0;
  animation: fadeInRight 1s ease-in-out forwards;

  &:nth-of-type(2) {
    animation-delay: .40s;
  }
  &:nth-of-type(3) {
    animation-delay: .60s;
  }
  &:nth-of-type(3) {
    animation-delay: .80s;
  }

    li {
      padding: 20px;
      opacity: 0;
      animation: fadeInRight 1s ease-in-out forwards;
    }

    @keyframes fadeInRight {
      0% {
        opacity: 0;
        left: 10%;
      }
      100% {
        opacity: 1;
        left: 0;
      }
    }
`;

export default Ul;
