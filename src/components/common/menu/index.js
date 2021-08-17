import React from 'react';
import PropTypes from 'prop-types';
import { motion, useCycle } from 'framer-motion';
import MenuToggle from './menuToggle';
import Navigation from './navigation';
import Logo from './logo';
import MenuWrapper from './style';

const Menu = ({ theme, setTheme }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <MenuWrapper>
      <Logo />
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <MenuToggle toggle={() => toggleOpen()} />
        <Navigation theme={theme} setTheme={setTheme} />
      </motion.nav>
    </MenuWrapper>
  );
};

Menu.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  setTheme: PropTypes.func.isRequired,
};

Menu.defaultProps = {};

export default Menu;
