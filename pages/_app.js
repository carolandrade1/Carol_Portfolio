import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import IndexHead from '../src/components/common/head/head';
import GlobalStyle from '../src/theme/global/GlobalStyles';
import { ThemeLight, ThemeDark } from '../src/theme';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(true);
  return (
    <>
      <IndexHead />
      <ThemeProvider theme={theme === 'light' ? ThemeLight : ThemeDark}>
        <GlobalStyle />
        <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
          {...pageProps}
          theme={theme}
          setTheme={setTheme}
        />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};
