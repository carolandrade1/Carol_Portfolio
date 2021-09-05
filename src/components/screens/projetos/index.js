/* eslint-disable react/prop-types */
import React from 'react';
import Link from '../../common/link/link';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import ListaProjetos, { ProjetoPrincipal, Seta } from './style';

const repositoriosId = [390006089, 380740837, 385367528, 396137846];
// const imagensItem = [
//   {
//     src: '/images/LPinstalura.webp',
//   },
//   {
//     src: '/images/LPalurakut.webp',
//   },
//   {
//     src: '/images/LPjavascriptprojetos.webp',
//   },
//   {
//     src: '/images/LPlayouts.webp',
//   },
// ];

// eslint-disable-next-line no-unused-vars
function Projetos({ repositorios }) {
  const repos = repositorios.filter((repo) => repositoriosId.includes(repo.id));
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
          <Seta href="#lista">
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
      <Box>
        <ListaProjetos id="lista">
          {repos.map((item) => (
            <li key={item.id}>
              <a
                href={item.html_url}
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
                    alt={item.name}
                    loading="lazy"
                  />
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Text
                      tag="h2"
                      variant="paragraph1XS"
                      color="fonts.main"
                    >
                      {item.name}
                    </Text>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="80px"
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        title="Star"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z" /></svg>
                        <Text tag="p">{item.stargazers_count}</Text>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        title="Fork"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.146.735-.565 1.791-1.778 2.252-1.192.452-2.053.953-2.646 1.536-.593-.583-1.453-1.084-2.646-1.536-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7 5 6.327 5 5.5 5.673 4 6.5 4z" /></svg>
                        <Text tag="p">{item.forks}</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Text tag="p" variant="paragraph3" color="fonts.light">
                    {item.description}
                  </Text>
                </Box>
                <svg className="arrow" width="75" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
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
