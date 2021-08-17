import React from 'react';
import { motion } from 'framer-motion';
import Text from '../../foundation/text';

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

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

function Navigation() {
  // toggle theme
  // const ToggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <motion.ul variants={variantsUl}>
      {/* <ToggleButton title="Toggle Theme" onClick={ToggleTheme}>
        <IconTheme theme={theme} />
      </ToggleButton> */}
      {links.map((link) => (
        <motion.li
          variants={variantsLi}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={link.url}
        >
          <Text tag="a" variant="title" href={link.url}>
            {link.texto}
          </Text>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default Navigation;
