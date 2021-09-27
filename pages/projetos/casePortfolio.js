import React from 'react';
import PropTypes from 'prop-types';
import CasePortfolio, { getContent } from '../../src/components/screens/casePortfolio';
import websitePageHOC from '../../src/components/wrappers/websitePage/hoc';

function CaseStudy({ messages }) {
  return (
    <CasePortfolio messages={messages} />
  );
}

CaseStudy.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
};

export default websitePageHOC(CaseStudy, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Case Portfolio',
    },
  },
});

export async function getStaticProps() {
  const messages = await getContent();

  return {
    props: {
      messages,
    },
  };
}
