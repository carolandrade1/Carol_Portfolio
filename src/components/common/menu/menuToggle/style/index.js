import styled from 'styled-components';

const StyledBurger = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    width: 35px;
    height: 25px;
    z-index: 20;

  div {
    cursor: pointer;
    width: 35px;
    height: 2px;
    background-color: ${({ open }) => (open ? '#000' : '#000')};
    transform-origin: 6px;
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
