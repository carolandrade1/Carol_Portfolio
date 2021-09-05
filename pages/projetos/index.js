import React from 'react';
import websitePageHOC from '../../src/components/wrappers/websitePage/hoc';
import Projetos from '../../src/components/screens/projetos';

// eslint-disable-next-line react/prop-types
function ProjetoScreen({ repositorios }) {
  return (
    <Projetos repositorios={repositorios} />
  );
}

ProjetoScreen.defaultProps = {};

export default websitePageHOC(ProjetoScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Projetos',
    },
  },
});

export async function getStaticProps() {
  const repositorios = await fetch('https://api.github.com/users/carolandrade1/repos')
    .then((respostaDoServer) => respostaDoServer.json());
  return {
    props: {
      repositorios,
    }, // will be passed to the page component as props
  };
}
