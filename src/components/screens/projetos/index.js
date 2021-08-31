import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import ListaProjetos, { LinkA } from './style';

const projetosItem = [
  {
    title: 'Instalura',
    url: 'https://alurakut-cas.vercel.app/login',
    codeurl: 'https://github.com/carolandrade1/alurakut',
    src: '/images/LPinstalura.webp',
    description: 'O projeto está sendo desenvolvido durante o Bootcamp Front-End Avançado da Alura.',
  },
  {
    title: 'Alurakut',
    url: 'https://alurakut-cas.vercel.app/login',
    codeurl: 'https://github.com/carolandrade1/alurakut',
    src: '/images/LPalurakut.webp',
    description: 'Versão do antigo Orkut, o projeto nos faz lembrar dos velhos tempos.',
  },
  {
    title: 'Projetos JS',
    url: 'https://carolandrade1.github.io/javascript-projects/',
    codeurl: 'https://github.com/carolandrade1/javascript-projects',
    src: '/images/LPjavascriptprojetos.webp',
    description: 'Aqui você encontra vários projetos manipulando o DOM.',
  },
  {
    title: 'Layouts CSS',
    url: 'https://carolandrade1.github.io/responsive-layout-css/',
    codeurl: 'https://github.com/carolandrade1/responsive-layout-css',
    src: '/images/LPlayouts.webp',
    description: '10 Layouts que destacam o quão robusto e impactante uma única linha de código CSS pode ser.',
  },
];

function Projetos() {
  return (
    <Box
      display="flex"
      flexDirection={{
        xs: 'column',
        md: 'row',
      }}
      justifyContent={{
        xs: 'justify',
        md: 'space-between',
      }}
      minHeight="120vh"
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
      <Text tag="p" variant="subTitleXS" color="fonts.main">
        Projetos
        <br />
        Selecionados
      </Text>
      <ListaProjetos>
        {projetosItem.map((link) => (
          <li key={link.title}>
            <Box
              className="itemsProjetos"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                flexDirection="column"
              >
                <LinkA href={link.codeurl} target="_blank" rel="noopener noreferrer" title="Code Github">
                  <Text
                    tag="span"
                    variant="paragraph1XS"
                    color="fonts.main"
                  >
                    {link.title}
                  </Text>
                </LinkA>
                <Text tag="p" variant="paragraph3" color="fonts.light">
                  {link.description}
                </Text>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Site Live"
                  className="img"
                >
                  <img src={link.src} alt={link.title} loading="lazy" />
                </a>
              </Box>
            </Box>
          </li>
        ))}
      </ListaProjetos>
    </Box>
  );
}

export default Projetos;
