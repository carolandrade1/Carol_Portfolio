import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../foundation/text';
import Ul from './style';
import FooterIcons from '../../footer/footerIcons';
import Box from '../../../foundation/box';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Projetos',
    url: '#projetos',
  },
  {
    texto: 'Contato',
    url: '#contato',
  },
];

function Navigation({ open, setOpen }) {
  return (
    <Ul open={open} onClick={() => setOpen(!open)}>
      {links.map((link) => (
        <li key={link.url} className="li">
          <Text tag="a" variant="titleXS" href={link.url} color="fonts.main">
            {link.texto}
          </Text>
        </li>
      ))}
      <Box
        display="flex"
        width="30%"
        justifyContent="center"
        marginLeft="auto"
        marginRight="auto"
      >
        <FooterIcons />
      </Box>
    </Ul>
  );
}

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

Navigation.defaultProps = {};

export default Navigation;
