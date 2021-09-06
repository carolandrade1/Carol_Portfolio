import React from 'react';
import Link from '../../common/link/link';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Erro, { GoBack } from './style';

function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      position="relative"
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
      <Erro>
        <Text tag="p" className="quatroZeroQuatro" color="fonts.main">404</Text>
        <Text tag="p">Não entre em panico!</Text>
      </Erro>
      <GoBack>
        <Link href="/" className="voltar">Voltar ao inicio</Link>
        <img src="/images/dontsee.webp" alt="Você não viu nada!" />
      </GoBack>
    </Box>
  );
}

export default NotFound;
