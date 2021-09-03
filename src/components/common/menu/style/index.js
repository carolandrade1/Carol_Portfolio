import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  z-index: 15;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.background.main.color};
`;

export default MenuWrapper;
