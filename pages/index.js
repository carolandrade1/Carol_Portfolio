import React from 'react';
import websitePageHOC from '../src/components/wrappers/websitePage/hoc';
import Hero from '../src/components/screens/hero';

function HomeScreen() {
  return (
    <Hero />
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});

HomeScreen.defaultProps = {};
