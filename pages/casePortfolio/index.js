import React from 'react';
import CasePortfolio from '../../src/components/screens/casePortfolio';
import websitePageHOC from '../../src/components/wrappers/websitePage/hoc';

function CaseStudy() {
  return (
    <CasePortfolio />
  );
}

export default websitePageHOC(CaseStudy, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Case Portfolio',
    },
  },
});

CaseStudy.defaultProps = {};
