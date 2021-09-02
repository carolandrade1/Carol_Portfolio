import React from 'react';
import websitePageHOC from '../src/components/wrappers/websitePage/hoc';
import Contato from '../src/components/screens/contato';

function ContatoScreen() {
  return (
    <Contato />
  );
}

export default websitePageHOC(ContatoScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Contato',
    },
  },
});

ContatoScreen.defaultProps = {};
