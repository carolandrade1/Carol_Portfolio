import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuToggle from './menuToggle/menuToggle';
import Navigation from './navigation/navigation';
import Logo from './logo';
import Box from '../../foundation/box';

const Menu = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="8vh"
      zIndex="15"
      position="sticky"
      top="0px"
    >
      <Logo />
      <>
        <MenuToggle open={open} setOpen={setOpen} />
        <Navigation open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} />
      </>
    </Box>
  );
};

Menu.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

Menu.defaultProps = {};

export default Menu;
