import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../foundation/text';
import Button from '../../button/button';
import Ul from './style';

const links = [
  {
    texto: 'Home',
    url: '/',
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

function Navigation({
  theme, setTheme, open, setOpen,
}) {
  // toggle theme
  const ToggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <Ul open={open} onClick={() => setOpen(!open)}>
      <Button ghost title="Toggle Theme" onClick={ToggleTheme}>
        {/* <IconTheme theme={theme} /> */}
      </Button>
      {links.map((link) => (
        <li key={link.url}>
          <Text tag="a" variant="title" href={link.url}>
            {link.texto}
          </Text>
        </li>
      ))}
    </Ul>
  );
}

Navigation.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  open: PropTypes.shape({}).isRequired,
  setOpen: PropTypes.func.isRequired,
};

Navigation.defaultProps = {};

export default Navigation;
