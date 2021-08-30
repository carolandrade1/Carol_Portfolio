import React from 'react';
import websitePageHOC from '../../src/components/wrappers/websitePage/hoc';
// import Sobre from '../src/components/screens/sobre/sobre';

function SobreScreen() {
  return (
    <h2> HELLO </h2>
  );
}

export default websitePageHOC(SobreScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});

SobreScreen.defaultProps = {};
