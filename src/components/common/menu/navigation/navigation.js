import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Ul from './style';
import Text from '../../../foundation/text';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
  {
    texto: 'Projetos',
    url: '/projetos',
  },
  {
    texto: 'Contato',
    url: '/contato',
  },
];

function Navigation({ open, setOpen }) {
  return (
    <Ul open={open} onClick={() => setOpen(!open)}>
      {links.map((link) => (
        <Text tag="li" color="fonts.main" className="li" key={link.url}>
          <Link href={link.url}>
            {link.texto}
          </Link>
        </Text>
      ))}
    </Ul>
  );
}

Navigation.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

Navigation.defaultProps = {};

export default Navigation;
