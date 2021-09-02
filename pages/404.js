import React from 'react';
import NotFound from '../src/components/screens/404';
import websitePageHOC from '../src/components/wrappers/websitePage/hoc';

function NotFoundScreen() {
  return (
    <NotFound />
  );
}

export default websitePageHOC(NotFoundScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Página 404',
    },
  },
});

NotFoundScreen.defaultProps = {};
