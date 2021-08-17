import styled from 'styled-components';

const Ul = styled.ul`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-flow: column nowrap;
  background-color: blue;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding: 10vh;
  z-index: 5;
  transition: ease .2s linear;
  text-align: center;

    li {
      font-family: 'Sora', sans-serif;
      padding: 20px;
      opacity: 0;
      animation: fadeInRight 1s ease-in-out forwards;
      animation-delay: .20s;

      &:nth-of-type(2) {
        animation-delay: .50s;
      }
      &:nth-of-type(3) {
        animation-delay: .80s;
      }
    }

    @keyframes fadeInRight {
      0% {
        opacity: 0;
        left: 30%;
      }
      100% {
        opacity: 1;
        left: 0;
      }
    }
`;

export default Ul;
