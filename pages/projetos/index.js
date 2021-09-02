import React from 'react';
import websitePageHOC from '../../src/components/wrappers/websitePage/hoc';
import Projetos from '../../src/components/screens/projetos';

function ProjetoScreen() {
  return (
    <Projetos />
  );
}

export default websitePageHOC(ProjetoScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Projetos',
    },
  },
});

ProjetoScreen.defaultProps = {};
