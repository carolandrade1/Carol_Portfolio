import * as React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Button from '../button/button';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="black"
    strokeLinecap="round"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <Button ghost onClick={toggle} type="button">
    <svg width="40" height="35" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </Button>
);

MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default MenuToggle;
