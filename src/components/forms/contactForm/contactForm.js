import React from 'react';
import Button from '../../common/button/button';
import TextField from '../textField/textfield';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import useForm from '../../../infra/hooks/forms/useForm';
import messageService from '../../../services/sendMessage/messageService';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const initialValues = {
    nome: '',
    email: '',
    mensagem: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      messageService.message({
        name: values.nome,
        email: values.email,
        message: values.mensagem,
      })
        .then(() => {
          setSubmissionStatus(formStates.DONE);
        })
        .catch(() => {
          setSubmissionStatus(formStates.ERROR);
        });
    },
  });

  return (
    <form
      id="contactForm"
      onSubmit={form.handleSubmit}
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

      <TextField
        placeholder="nome"
        name="nome"
        value={form.values.nome}
        onChange={form.handleChange}
        label="Nome"
        type="text"
      />

      <TextField
        placeholder="email@dominio.com"
        name="email"
        value={form.values.email}
        onChange={form.handleChange}
        label="Email"
        type="email"
      />

      <TextField
        placeholder="mande sua mensagem"
        name="mensagem"
        value={form.values.mensagem}
        onChange={form.handleChange}
        label="Mensagem"
        type="text"
        rows="5"
      />

      <Button
        variant="paragraph3"
        type="submit"
        // disabled={isFormInvalid}
        fullWidth
      >
        Enviar mensagem
      </Button>

      {submissionStatus === formStates.DONE && (
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

      {submissionStatus === formStates.ERROR && (
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
export default function ContactForm({ propsDoModal, setModalState }) {
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
