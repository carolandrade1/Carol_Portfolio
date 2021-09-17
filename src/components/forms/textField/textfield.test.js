import React from 'react';
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
      />,
    );

    const label = screen.getByText(/nome/i);
    const textField = screen.getByPlaceholderText(/nome/i);

    expect(textField).toMatchSnapshot();
    expect(label).toMatchSnapshot();
  });
});
