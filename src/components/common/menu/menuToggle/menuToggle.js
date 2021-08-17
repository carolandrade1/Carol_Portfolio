import React from 'react';
import PropTypes from 'prop-types';
import StyledBurger from './style';

const MenuToggle = ({ open, setOpen }) => (
  <>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  </>
);

MenuToggle.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

MenuToggle.defaultProps = {};

export default MenuToggle;
