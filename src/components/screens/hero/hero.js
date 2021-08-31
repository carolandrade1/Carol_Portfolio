import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import CircleVideo from './animation/circleVideo';
import TextContainer from './style';
import Link from '../../common/link/link';

function Hero() {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      flexDirection={{
        xs: 'column',
        md: 'row',
      }}
      height="75vh"
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
      <TextContainer>
        <Text
          tag="p"
          variant="paragraph2"
          textAlign="left"
          marginBottom="12px"
          color="fonts.main"
        >
          Olá, meu nome é
        </Text>
        <Text
          tag="h1"
          variant="titleXS"
          textAlign="left"
          marginBottom="12px"
          color="details.main"
        >
          Carol Andrade
        </Text>
        <Text
          tag="p"
          variant="paragraph2"
          textAlign="left"
          marginBottom="12px"
          color="fonts.main"
        >
          Desenvolvedora front-end, atualmente localizada em Belo Horizonte, Brasil.
          Em busca da minha primeira oportunidade na area de desenvolvimento web.
        </Text>
        <Link href="/contato" className="contato">
          <Text tag="span" variant="paragraph2" color="fonts.main">
            Contato
          </Text>
        </Link>
      </TextContainer>
      <CircleVideo />
    </Box>
  );
}

export default Hero;
