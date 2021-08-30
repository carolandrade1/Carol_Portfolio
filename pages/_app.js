import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import IndexHead from '../src/components/common/head/head';
import GlobalStyle from '../src/theme/global/GlobalStyles';
import Theme from '../src/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <IndexHead />
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
          {...pageProps}
        />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};
