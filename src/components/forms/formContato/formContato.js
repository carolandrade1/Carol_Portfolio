import React, { useCallback } from 'react';
import Button from '../../common/button/button';
import TextField from '../textField/textfield';
import Box from '../../foundation/box';
import Text from '../../foundation/text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

// eslint-disable-next-line react/prop-types
function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setUserInfo((state) => ({
        ...state,
        [name]: value,
      }));
    },
    [userInfo],
  );

  const isFormInvalid = userInfo.nome.length === 0
    || userInfo.email.length === 0
    || userInfo.mensagem.length === 0;

  return (
    <form
      id="formContato"
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmited(true);

        // Data Transfer Object
        const userDTO = {
          name: userInfo.nome,
          email: userInfo.email,
          message: userInfo.mensagem,
        };

        fetch('/api/sendgrid', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userDTO),
        })
          .then((resposta) => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(resposta);
            setUserInfo(({
              nome: '',
              email: '',
              mensagem: '',
            }));
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >
      <Text
        variant="paragraph1XS"
        tag="h1"
        color="fonts.main"
      >
        Obrigada pela visita 😄
      </Text>
      <Text
        variant="paragraph2"
        tag="p"
        marginBottom="32px"
      >
        Deixe uma mensagem que entrarei em contato.
      </Text>

      <div>
        <TextField
          placeholder="nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
          label="Nome"
          type="text"
        />
      </div>

      <div>
        <TextField
          placeholder="email@dominio.com"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          label="Email"
          type="email"
        />
      </div>

      <div>
        <TextField
          placeholder="mande sua mensagem"
          name="mensagem"
          value={userInfo.mensagem}
          onChange={handleChange}
          label="Mensagem"
          type="text"
          row="5"
        />
      </div>

      <Button
        variant="paragraph3"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Enviar mensagem
      </Button>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <img
            src="/images/success.gif"
            alt="Tudo certo!"
            width="100px"
            height="100px"
          />
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <img
            src="/images/erro.gif"
            alt="Ixi, alguma coisa deu errado!"
            width="100px"
            height="100px"
          />
        </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormContato({ propsDoModal, setModalState }) {
  return (
    <Box
      display="grid"
      placeItems="center"
      marginLeft="0"
      marginRight="0"
      flex="1"
    >
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100vh"
        width="100%"
        flex="1"
        padding={{
          xs: '16px',
          md: '100px',
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...propsDoModal}
      >
        <FormContent setModalState={setModalState} />
      </Box>
    </Box>
  );
}
