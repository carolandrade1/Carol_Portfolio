import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../foundation/text';
import Button from '../../button/button';
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
      {links.map((link) => (
        <li key={link.url} className="li">
          <Text tag="a" variant="titleXS" href={link.url}>
            {link.texto}
          </Text>
        </li>
      ))}
      <Button ghost title="Toggle Theme" onClick={ToggleTheme}>
        {theme === 'light' && (
          <Text tag="p" variant="paragraph1XS">Dark Mode</Text>
        )}
        {theme === 'dark' && (
          <Text tag="p" variant="paragraph1XS">Light Mode</Text>
        )}
      </Button>
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
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

Navigation.defaultProps = {};

export default Navigation;
