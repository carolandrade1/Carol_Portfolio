import React from 'react';
import PropTypes from 'prop-types';

import Container from '../src/components/foundation/container';
import Menu from '../src/components/common/menu';
import Footer from '../src/components/common/footer/footer';

function Home({ theme, setTheme }) {
  return (
    <Container
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Menu theme={theme} setTheme={setTheme} />
      <Footer />
    </Container>
  );
}

Home.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

Home.defaultProps = {};

export default Home;
