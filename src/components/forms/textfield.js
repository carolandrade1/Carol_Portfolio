import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../foundation/text';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;

  label {
    width: 100%;
    color: ${({ theme }) => theme.colors.fonts.main.color};
    text-align: left;
    font-weight: 600;
  }
`;

const Input = styled(Text)`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.svg.main.color};
  padding: 12px 0;
  outline: 0;
  background-color: ${({ theme }) => theme.colors.background.main.color};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph3',
};

export default function TextField({
  placeholder, name, onChange, value, label, type,
}) {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
