import React from 'react';
import PropTypes from 'prop-types';
import Sobre, { getContent } from '../src/components/screens/sobre/sobre';
import websitePageHOC from '../src/components/wrappers/websitePage/hoc';

function SobreScreen({ messages }) {
  return (
    <Sobre messages={messages} />
  );
}

SobreScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
};

export default websitePageHOC(SobreScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
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
