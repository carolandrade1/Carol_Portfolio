import React from 'react';
import Link from '../../common/link/link';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import ListaProjetos, { Efeito, ProjetosPrincipais } from './style';

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
      paddingLeft={{
        xs: '20px',
        md: '40px',
      }}
      paddingRight={{
        xs: '20px',
        md: '40px',
      }}
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
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={{
            xs: 'justify',
            md: 'space-between',
          }}
        >
          <Text tag="span" variant="subTitleXS" color="fonts.main">
            Projetos
            <br />
            Selecionados
          </Text>
        </Box>

        <ProjetosPrincipais>
          <Link href="/">
            <img src="/images/LPinstalura.webp" alt="" />
            <Efeito>
              <Text
                tag="span"
                variant="paragraph1XS"
                color="fonts.main"
              >
                Portfolio
              </Text>
            </Efeito>
          </Link>
        </ProjetosPrincipais>
      </Box>
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
                <img src={item.src} alt={item.title} loading="lazy" />
                <Efeito>
                  <Text
                    tag="span"
                    variant="paragraph1XS"
                    color="fonts.main"
                  >
                    {item.title}
                  </Text>
                </Efeito>
                <Text tag="p" variant="paragraph3" color="fonts.light">
                  {item.description}
                </Text>
              </Box>
            </a>
          </li>
        ))}
      </ListaProjetos>
    </Box>
  );
}

export default Projetos;
