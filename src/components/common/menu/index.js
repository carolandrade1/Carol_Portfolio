import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuToggle from './menuToggle/menuToggle';
import Navigation from './navigation/navigation';
import Logo from './logo';
import MenuWrapper from './style';

const Menu = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <MenuWrapper>
      <Logo />
      <>
        <MenuToggle open={open} setOpen={setOpen} />
        <Navigation open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} />
      </>
    </MenuWrapper>
  );
};

Menu.propTypes = {
  theme: PropTypes.bool.isRequired,
  setTheme: PropTypes.func.isRequired,
};

Menu.defaultProps = {};

export default Menu;
