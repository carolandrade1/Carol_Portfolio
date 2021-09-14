import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Canais, { Descricao, Image, Info } from './style';

const canais = [
  {
    name: 'Alura',
    url: 'https://www.alura.com.br/',
    imageurl: 'https://github.com/alura.png',
  },
  {
    name: 'Ju Negreiros',
    url: 'https://github.com/juunegreiros',
    imageurl: 'https://github.com/juunegreiros.png',
  },
  {
    name: 'Mario Souto',
    url: 'https://www.youtube.com/c/DevSoutinho',
    imageurl: 'https://github.com/omariosouto.png',
  },
  {
    name: 'John Smilga',
    url: 'https://www.youtube.com/c/CodingAddict',
    imageurl: 'https://github.com/john-smilga.png',
  },
  {
    name: 'Coder Coder',
    url: 'https://www.youtube.com/c/TheCoderCoder',
    imageurl: 'https://github.com/thecodercoder.png',
  },
  {
    name: 'Free Code Camp',
    url: 'https://www.freecodecamp.org/',
    imageurl: 'https://github.com/freeCodeCamp.png',
  },
  {
    name: 'Rafaella Ballerini',
    url: 'https://www.youtube.com/c/rafaellaballerini',
    imageurl: 'https://github.com/rafaballerini.png',
  },
  {
    name: 'Kevin Powell',
    url: 'https://www.youtube.com/kepowob',
    imageurl: 'https://github.com/kevin-powell.png',
  },
  {
    name: 'Bedimcode',
    url: 'https://www.youtube.com/c/Bedimcode',
    imageurl: 'https://github.com/bedimcode.png',
  },
];

function Sobre() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      paddingLeft={{
        xs: '20px',
        md: '40px',
      }}
      paddingRight={{
        xs: '20px',
        md: '40px',
      }}
      minHeight="70vh"
    >
      <Text tag="h1" variant="titleXS">Sobre</Text>
      <Box
        display="flex"
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Info>
          <Descricao>
            <Text tag="p" variant="paragraph3">
              Formada em Engenharia Civil em transição de carreira para me
              tornar uma Desenvolvedora Front End. Atualmente bolsista no Bootcamp
              Front End da Alura. Extremamente motivada, em constante desenvolvimento
              e em busca da primeira oportunidade.
            </Text>
            <Text tag="p" variant="paragraph3">
              Durante os últimos meses tive acesso a vários canais e sites que me ensinaram
              diversas tecnologias e ferramentas e esses materiais me auxiliaram a desenvolver
              alguns dos meus projetos então queria deixar aqui meus agradecimentos.
            </Text>
          </Descricao>
          <Canais>
            {canais.map((dado) => (
              <li key={dado.name}>
                <Text tag="a" href={dado.url} title={dado.name} color="fonts.light" target="_blank" rel="noopener noreferrer">
                  {dado.name}
                  <img src={dado.imageurl} alt="" />
                </Text>
              </li>
            ))}
          </Canais>
        </Info>
        <Image>
          <img src="https://avatars.githubusercontent.com/u/65976843?v=4" alt="" />
        </Image>
      </Box>
    </Box>
  );
}

export default Sobre;
