import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import FooterIcons from './footerIcons';

function Footer() {
  return (
    <Box
      textAlign="center"
      display="flex"
      justifyContent={{
        xs: 'center',
        md: 'space-between',
      }}
      alignItems="center"
      zIndex="5"
      position="sticky"
      bottom="20px"
    >
      <Text href="https://github.com/carolandrade1" target="_blank" rel="noopener noreferrer" tag="a" variant="paragraph3" color="fonts.main" textAlign="center">
        ©
        {new Date().getFullYear()}
        {' '}
        - Carol
      </Text>
      <Box
        display={{
          xs: 'none',
          md: 'initial',
        }}
      >
        <FooterIcons />
      </Box>
    </Box>
  );
}

export default Footer;