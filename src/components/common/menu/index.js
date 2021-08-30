import React, { useState } from 'react';
import MenuToggle from './menuToggle/menuToggle';
import Navigation from './navigation/navigation';
import Logo from './logo';
import MenuWrapper from './style';

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <MenuWrapper>
      <Logo />
      <>
        <MenuToggle open={open} setOpen={setOpen} />
        <Navigation open={open} setOpen={setOpen} />
      </>
    </MenuWrapper>
  );
};

Menu.defaultProps = {};

export default Menu;
