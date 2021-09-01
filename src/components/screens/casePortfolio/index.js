import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';

function CasePortfolio() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={{
        xs: 'justify',
        md: 'space-between',
      }}
      padding={{
        xs: '0px',
        md: '40px',
      }}
      paddingLeft="20px"
      paddingRight="20px"
    >
      <Text tag="p">Portfolio</Text>
    </Box>
  );
}

export default CasePortfolio;
