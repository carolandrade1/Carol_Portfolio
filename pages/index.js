import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../src/components/common/menu';

function Home({ theme, setTheme }) {
  return (
    <>
      <Menu theme={theme} setTheme={setTheme} />
    </>
  );
}

Home.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  setTheme: PropTypes.func.isRequired,
};

Home.defaultProps = {};

export default Home;
