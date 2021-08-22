import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import CircleVideo from './animation/circleVideo';
import Button from '../../common/button/button';
import TextContainer from './style';

function Hero() {
  return (
    <Box
      display="flex"
      justifyContent={{
        xs: 'space-between',
        md: 'space-around',
      }}
      flexDirection={{
        xs: 'column',
        md: 'row',
      }}
      height={{
        xs: '75vh',
        md: '85vh',
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
      <TextContainer>
        <Text
          tag="p"
          variant="paragraph2"
          textAlign="left"
          marginBottom="12px"
        >
          Olá, meu nome é
        </Text>
        <Text
          tag="h1"
          variant="titleXS"
          textAlign="left"
          marginBottom="12px"
        >
          Carol Andrade
        </Text>
        <Text
          tag="p"
          variant="paragraph2"
          textAlign="left"
          marginBottom="12px"
        >
          Desenvolvedora front-end, atualmente localizada em Belo Horizonte, Brasil.
          Em busca da minha primeira oportunidade na area de desenvolvimento web.
        </Text>
        <a href="#contato" className="contato">
          <Button width="110px" height="42px">
            <Text tag="p" variant="paragraph2">
              Contato
            </Text>
          </Button>
        </a>
      </TextContainer>
      <CircleVideo />
    </Box>
  );
}

export default Hero;
