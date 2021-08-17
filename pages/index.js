import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../src/components/common/menu';
import Box from '../src/components/foundation/box';

function Home({ theme, setTheme }) {
  return (
    <Box>
      <Menu theme={theme} setTheme={setTheme} />
    </Box>
  );
}

Home.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

Home.defaultProps = {};

export default Home;
