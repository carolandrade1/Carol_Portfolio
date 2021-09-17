import React from 'react';
import Text from '../../foundation/text';
import CircleVideo from './animation/circleVideo';
import ContainerHero, { TextContainer } from './style';
import Link from '../../common/link/link';

function Hero() {
  return (
    <ContainerHero>
      <TextContainer>
        <Text
          tag="p"
          variant="paragraph3"
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
          color="fonts.main"
        >
          Carol Andrade
        </Text>
        <Text
          tag="p"
          variant="paragraph3"
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
    </ContainerHero>
  );
}

export default Hero;
