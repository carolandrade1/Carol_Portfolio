import styled from 'styled-components';

const Ul = styled.ul`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-flow: column nowrap;
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.main.color};
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding: 10vh;
  z-index: 5;
  text-align: center;
  opacity: 0;
  animation: fadeInRight 0.5s ease-in-out forwards;

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

    p:hover {
      color: ${({ theme }) => theme.colors.details.main.color};
    }
`;

export default Ul;
