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
  padding-top: 3.5rem;
  z-index: 5;
  transition: ease .2s linear;
  text-align: center;

`;

export default Ul;
