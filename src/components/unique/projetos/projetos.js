import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Button from '../../common/button/button';
import ListaProjetos from './style';

const projetosItem = [
  {
    texto: 'Instalura',
    url: 'https://alurakut-cas.vercel.app/login',
    codeurl: 'https://github.com/carolandrade1/alurakut',
    src: '/images/LPinstalura.png',
  },
  {
    texto: 'Alurakut',
    url: 'https://alurakut-cas.vercel.app/login',
    codeurl: 'https://github.com/carolandrade1/alurakut',
    src: '/images/LPalurakut.png',
  },
  {
    texto: 'Projetos JS',
    url: 'https://carolandrade1.github.io/javascript-projects/',
    codeurl: 'https://github.com/carolandrade1/javascript-projects',
    src: '/images/LPjavascriptprojetos.png',
  },
  {
    texto: 'Layouts Responsivos',
    url: 'https://carolandrade1.github.io/responsive-layout-css/',
    codeurl: 'https://github.com/carolandrade1/responsive-layout-css',
    src: '/images/LPlayouts.png',
  },
];

function Projetos() {
  const themeContext = useContext(ThemeContext);
  const { color } = themeContext.colors.svg.main;

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
      height="120vh"
      marginTop={{
        xs: '150px',
        md: '200px',
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
      <Text id="projetos" tag="p" variant="subTitle" marginBottom="40px">
        Projetos
        <br />
        Selecionados
      </Text>
      <ListaProjetos>
        {projetosItem.map((link) => (
          <li key={link.texto}>
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
                <Text tag="p" variant="paragraph1" marginBottom="12px">
                  {link.texto}
                </Text>
                <Button width="110px" height="35px">
                  <Text
                    tag="a"
                    variant="paragraph3"
                    href={link.codeurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Code Github"
                  >
                    Code
                  </Text>
                </Button>
                <div className="img">
                  <img src={link.src} alt={link.texto} width="280px" height="158px" />
                </div>
              </Box>
              <a
                href={link.url}
                className="linkSvg"
                target="_blank"
                rel="noopener noreferrer"
                title="Site Live"
              >
                <svg width="35" height="35" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.5 15.625V59.375" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel" />
                  <path d="M59.375 37.5L37.5 59.375L15.625 37.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Box>
          </li>
        ))}
      </ListaProjetos>
    </Box>
  );
}

export default Projetos;
