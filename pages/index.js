import React from 'react';
import Container from '../src/components/foundation/container';
import Menu from '../src/components/common/menu';
import Hero from '../src/components/unique/hero/hero';
import Projetos from '../src/components/unique/projetos/projetos';
import Contato from '../src/components/unique/contato/contato';
import Footer from '../src/components/common/footer/footer';

function Home() {
  return (
    <Container
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Menu />
      <Hero />
      <Projetos />
      <Contato />
      <Footer />
    </Container>
  );
}

Home.defaultProps = {};

export default Home;
