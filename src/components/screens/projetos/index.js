import React from 'react';
import Link from '../../common/link/link';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import ListaProjetos, { ProjetoPrincipal, Seta } from './style';

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
        minHeight={{
          xs: 'auto',
          md: '75vh',
        }}
        marginBottom={{
          xs: '0',
          md: '50px',
        }}
        alignItems="flex-end"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={{
            xs: 'justify',
            md: 'space-between',
          }}
          height="100%"
          width="100%"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
        >
          <Text tag="h1" variant="subTitleXS" color="fonts.main" marginBottom="50px">
            Projetos
            <br />
            Selecionados
          </Text>
          <Seta>
            <svg width="75" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.875 49.5834L53.125 20.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.875 20.4167H53.125V49.5834" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Seta>
        </Box>
        <ProjetoPrincipal>
          <Link href="/casePortfolio" title="Case Portfolio">
            <img src="https://i.postimg.cc/PfSBBWzG/landingpage.png" alt="Imagem da Home do Portfolio" />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent={{
                xs: 'justify',
                md: 'space-between',
              }}
              alignItems="center"
            >
              <Box>
                <Text
                  tag="h2"
                  variant="paragraph1XS"
                  color="fonts.main"
                >
                  Portfolio
                </Text>
                <Text tag="p" variant="paragraph3" color="fonts.light">
                  Veja como este portfolio foi criado!
                </Text>
              </Box>
              <svg className="arrow" width="55" height="50" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.875 49.5834L53.125 20.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.875 20.4167H53.125V49.5834" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Box>
          </Link>
        </ProjetoPrincipal>
      </Box>
      <Box
        // marginTop={{
        //   xs: '0px',
        //   md: '0px',
        // }}
      >
        <ListaProjetos>
          {projetosItem.map((item) => (
            <li key={item.title}>
              <a
                href={item.codeurl}
                target="_blank"
                rel="noopener noreferrer"
                title="Site Live"
                className="itemsProjetos"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                  />
                  <Text
                    tag="h2"
                    variant="paragraph1XS"
                    color="fonts.main"
                  >
                    {item.title}
                  </Text>
                  <Text tag="p" variant="paragraph3" color="fonts.light">
                    {item.description}
                  </Text>
                </Box>
                <svg className="" width="75" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.875 49.5834L53.125 20.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.875 20.4167H53.125V49.5834" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ListaProjetos>
      </Box>
    </Box>
  );
}

export default Projetos;
