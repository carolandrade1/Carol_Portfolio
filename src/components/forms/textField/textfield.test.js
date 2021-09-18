import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';
import TextField from './textfield';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Carol"
        onChange={() => { }}
        name="nome"
        label="Nome"
        type="text"
      />,
    );

    const label = screen.getByText(/nome/i);
    const textField = screen.getByPlaceholderText(/nome/i);

    expect(textField).toMatchSnapshot();
    expect(label).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            label="Nome"
            type="text"
            isTouched
          />,
        );

        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'Carol');
        expect(onChangeMock).toHaveBeenCalledTimes(5);
      });
    });
  });

  describe('when field is invalid', () => {
    // elemento tenha span de texto
    // muda CSS borda
    test('display the respective error message', () => {
      render(
        <TextField
          placeholder="Email"
          value="teste@teste.com"
          onChange={() => { }}
          name="email"
          label="Email"
          type="email"
          isTouched
          error="O campo email é obrigatório"
        />,
      );

      // screen.debug();

      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(screen.getByPlaceholderText(/email/i)).toHaveValue('teste@teste.com');
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email é obrigatório');
      expect(inputEmail).toMatchSnapshot();
    });
  });
});
