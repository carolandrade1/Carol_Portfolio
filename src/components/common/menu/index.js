import React from 'react';
// import PropTypes from 'prop-types';
import { motion, useCycle } from 'framer-motion';
import MenuToggle from './menuToggle';
import Navigation from './navigation';
import Logo from './logo';
import MenuWrapper from './style';

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <MenuWrapper>
      <Logo />
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <MenuToggle toggle={() => toggleOpen()} />
        <Navigation />
      </motion.nav>
    </MenuWrapper>
  );
};

export default Menu;
