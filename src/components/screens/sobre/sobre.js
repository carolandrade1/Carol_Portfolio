/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import ContainerSobre, {
  Canais, Descricao, Image, Info,
} from './style';

export { getContent } from './getContent';

function Sobre({ messages }) {
  return (
    <ContainerSobre>
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
            {messages.allPageSobres.map((dado) => (
              <li key={dado.id}>
                <Text tag="a" href={dado.siteUrl} title={dado.name} color="fonts.main" target="_blank" rel="noopener noreferrer">
                  {dado.name}
                  <img src={dado.imageUrl} alt={dado.name} />
                </Text>
              </li>
            ))}
          </Canais>
        </Info>
        <Image>
          <img src="https://avatars.githubusercontent.com/u/65976843?v=4" alt="" />
        </Image>
      </Box>
    </ContainerSobre>
  );
}

Sobre.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
};

export default Sobre;
