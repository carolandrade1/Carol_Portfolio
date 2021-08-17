import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/theme/global/GlobalStyles';
import theme from '../src/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
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
