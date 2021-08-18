import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Button from '../../common/button/button';
import ListaProjetos from './style';

const projetosItem = [
  {
    texto: 'Alurakut',
    url: 'https://alurakut-cas.vercel.app/login',
    codeurl: 'https://github.com/carolandrade1/alurakut',
    src: '/images/LoginDesktop.png',
  },
  {
    texto: 'Projetos JS',
    url: 'https://carolandrade1.github.io/javascript-projects/',
    codeurl: 'https://github.com/carolandrade1/javascript-projects',
    src: '/images/LoginDesktop.png',
  },
  {
    texto: 'Layouts Responsivos',
    url: 'https://carolandrade1.github.io/responsive-layout-css/',
    codeurl: 'https://github.com/carolandrade1/responsive-layout-css',
    src: '/images/LoginDesktop.png',
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
      height={{
        xs: '75vh',
        md: '80vh',
      }}
      marginTop={{
        xs: '150px',
        md: '150px',
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
      <Text tag="p" variant="subTitle" marginBottom="40px">
        Projetos
        <br />
        Selecionados
      </Text>
      <ListaProjetos>
        {projetosItem.map((link) => (
          <a href={link.url} key={link.texto}>
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
                <Button width="70px" height="22px">
                  <Text tag="a" variant="paragraph3" href={link.codeurl}>Code</Text>
                </Button>
                <div className="img">
                  <img src={link.src} alt={link.texto} width="250px" height="150px" />
                </div>
              </Box>
              <svg width="35" height="35" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.5 15.625V59.375" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel" />
                <path d="M59.375 37.5L37.5 59.375L15.625 37.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Box>
          </a>
        ))}
      </ListaProjetos>
    </Box>
  );
}

export default Projetos;
