import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import ContainerCasePortfolio, {
  Info, Description, Image, LogoImage, Referencia,
} from './style';

const listDescription = [
  {
    title: 'Pesquisa e Planejamento',
    description: 'O desafio do Bootcamp era criar um Portfolio com o intutio de dispor outros projetos. A principio eu realizei uma pesquisa para referências de layout, cores e fontes. Em seguida fiz um rascunho no Figma, para então começar a desenvolver o projeto.',
    ref: ['Sistema de design', 'Dribbble', 'Awwwards', 'Airbnb design', 'Behance', 'UX Design', 'Google Fonts'],
  },
  {
    title: 'Tecnologias e Linguagens',
    description: 'Durante o Bootcamp, pude conhecer o Next.js, React e Style-components. Expandi meu conhecimento em CSS e pude desenvolver animações e efeitos. Além disso passei a utilizar pacotes para garantir fluxos de integração contínua e deploy contínuo (CI/CD) no projeto.',
    ref: ['JS, ES6', 'HTML', 'CSS', 'Style-components', 'Next.js', 'React', 'Conventional Commits', 'ESLint', 'Husky'],
  },
  {
    title: 'Fontes e cores',
    description: 'A fonte escolhida para o projeto foi Sora, disponibilizada pelo GoogleFonts. Foram escolhidas cores neutras e para alguns detalhes da pagina, a cor roxa.',
    ref: ['Background', 'Fonte', 'Detalhes', '#EFEFEF', '#000000', '#9759CD', '#CDC2D3', '#424242', '#B488DA'],
  },
];

function CasePortfolio() {
  return (
    <ContainerCasePortfolio>
      <Text tag="h1" variant="subTitleXS">Portfolio</Text>
      <Box
        display="flex"
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent={{
          xs: 'center',
          md: 'space-between',
        }}
        paddingTop="30px"
        paddingBottom="30px"
        alignItems={{
          xs: 'left',
          md: 'center',
        }}
      >
        <Info>
          <Box>
            <Text tag="p" variant="paragraph3" color="fonts.main">Website</Text>
            <a href="https://carolandrade.dev/" target="_blank" rel="noopener noreferrer" title="Site Portfolio">
              <Text tag="p" variant="paragraph2" color="fonts.main">
                https://carolandrade.dev/
              </Text>
            </a>
          </Box>
          <Box>
            <Text tag="p" variant="paragraph3" color="fonts.main">Data</Text>
            <Text tag="p" variant="paragraph2">agosto 2021 - Incompleto</Text>
          </Box>
        </Info>
        <LogoImage>
          <img src="/images/logo.svg" alt="Logo Portfolio" />
        </LogoImage>
      </Box>
      <Description>
        {listDescription.map((item) => (
          <li className="list" key={item.title}>
            <Text tag="h2" variant="paragraph1XS" color="fonts.main">{item.title}</Text>
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
              alignItems="flex-start"
            >
              <Text tag="p" variant="paragraph3" color="fonts.main">{item.description}</Text>
              <Referencia>
                {item.ref.map((dado) => (
                  <li key={dado}>
                    <Text tag="span" color="fonts.main">{dado}</Text>
                  </li>
                ))}
              </Referencia>
            </Box>
          </li>
        ))}
      </Description>
      <Image>
        <img src="/images/fonte.svg" alt="Fonte Sora" />
      </Image>
      <Text tag="p" variant="paragraph3" color="fonts.main" textAlign="justify" lineHeight="1.5">
        O portfolio começou sendo o primeiro desafio do Bootcamp Front End Avançado da Alura,
        mas com o passar das etapas decidi me aprofundar e melhorar cada vez mais o projeto.
        Com isso, conheci e aprendi novas ferramentas, desenvolvi novos projetos e
        adquiri novos conhecimentos.
      </Text>
    </ContainerCasePortfolio>
  );
}

export default CasePortfolio;
