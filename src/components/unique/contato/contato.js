import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Button from '../../common/button/button';

function Contato() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={{
        xs: 'space-around',
        md: 'space-around',
      }}
      height={{
        xs: '40vh',
        md: '90vh',
      }}
      paddingTop={{
        xs: '150px',
        md: '150px',
      }}
      padding={{
        xs: '0px',
        md: '40px',
      }}
      textAlign="center"
    >
      <Text tag="p" variant="titleXS">
        Lets stay in_
        <Button ghost>
          <Text className="spanContato" tag="span" variant="titleXS">touch</Text>
        </Button>
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={{
          xs: 'justify',
          md: 'space-between',
        }}
      >
        <Text tag="p" variant="paragraph3">Redes Sociais</Text>
        <Box>
          <Text
            tag="a"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title="Likedin"
          >
            Linkedin
          </Text>
          <Text
            tag="a"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            Github
          </Text>
          <Text
            tag="a"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title="Codepen"
          >
            Codepen
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Contato;
