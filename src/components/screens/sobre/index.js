import React from 'react';
import Box from '../../foundation/box';

function Sobre() {
  return (
    <Box
      display="flex"
      flexDirection={{
        xs: 'column',
        md: 'row',
      }}
      justifyContent={{
        xs: 'center',
        md: 'center',
      }}
      padding={{
        xs: '0px',
        md: '40px',
      }}
      paddingLeft={{
        xs: '20px',
        md: '40px',
      }}
      paddingRight={{
        xs: '20px',
        md: '40px',
      }}
    >
      🛠 Em construção
    </Box>
  );
}

export default Sobre;
