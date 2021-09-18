/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import styled from 'styled-components';
import Button from '../../common/button/button';
import TextField from '../textField/textfield';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import useForm from '../../../infra/hooks/forms/useForm';
import messageService from '../../../services/sendMessage/messageService';

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;

  button {
    height: 38px;
    width: 38px;
    font-weight: 600;
    border-radius: 50%;
    padding: 10px;
  }
`;

const formStates = { // TODO
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const contactSchema = yup.object().shape({
  nome: yup
    .string()
    .required('Nome é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  email: yup
    .string()
    .email('Email precisa ser válido')
    .required('Email é obrigatório')
    .min(10, 'Preencha ao menos 10 caracteres'),
  mensagem: yup
    .string()
    .required('Mensagem é obrigatória')
    .min(3, 'Preencha ao menos 3 caracteres'),
});

function FormContent({ onSubmit, setModalState }) {
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT); // TODO
  const initialValues = {
    nome: '',
    email: '',
    mensagem: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
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
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return contactSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form
      id="contactForm"
      onSubmit={onSubmit || form.handleSubmit}
    >
      <CloseButton>
        <Button
          type="button"
          onClick={() => setModalState(false)}
        >
          X
        </Button>
      </CloseButton>
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
        label="Nome"
        name="nome"
        placeholder="nome"
        type="text"
        value={form.values.nome}
        onChange={form.handleChange}
        error={form.errors.nome}
        onBlur={form.handleBlur}
        isTouched={form.touched.nome}
      />

      <TextField
        label="Email"
        name="email"
        placeholder="email@dominio.com"
        type="email"
        value={form.values.email}
        onChange={form.handleChange}
        error={form.errors.email}
        onBlur={form.handleBlur}
        isTouched={form.touched.email}
      />

      <TextField
        label="Mensagem"
        name="mensagem"
        placeholder="mande sua mensagem"
        type="text"
        value={form.values.mensagem}
        onChange={form.handleChange}
        error={form.errors.mensagem}
        onBlur={form.handleBlur}
        isTouched={form.touched.mensagem}
      />

      <Button
        variant="paragraph3"
        type="submit"
        fullWidth
        disabled={form.isFormDisabled}
      >
        Enviar mensagem
      </Button>

      {submissionStatus === formStates.DONE && ( // TODO
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

      {submissionStatus === formStates.ERROR && ( // TODO
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

FormContent.defaultProps = {
  onSubmit: undefined,
};

FormContent.propTypes = {
  onSubmit: PropTypes.func,
};

export default function ContactForm({ propsDoModal, setModalState, onSubmit }) {
  return (
    <Box
      display="grid"
      placeItems="center"
      marginLeft="0"
      marginRight="0"
      flex="1"
    >
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.2)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        borderRadius="15px"
        height={{
          xs: 'auto',
          md: '600px',
        }}
        width={{
          xs: 'auto',
          md: '60%',
        }}
        flex="1"
        padding={{
          xs: '32px',
          md: '100px',
        }}
        backgroundColor="white"
        position="relative"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...propsDoModal}
      >
        <FormContent setModalState={setModalState} onSubmit={onSubmit} />
      </Box>
    </Box>
  );
}
