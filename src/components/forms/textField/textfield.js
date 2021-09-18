/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/text';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;

  label {
    width: 100%;
    color: ${({ theme }) => theme.colors.fonts.main.color};
    text-align: left;
    font-weight: 600;
    margin-bottom: 5px;
  }
`;

const Input = styled(Text)`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px 5px;
  outline: 0;
  background-color: ${({ theme }) => theme.colors.background.second.color};
  margin-bottom: 2px;

  ${({ theme, isFieldInvalid }) => isFieldInvalid && css`
    border: 1px solid;
    border-color: ${theme.colors.error.main.color};
    & + span {
      color: ${theme.colors.error.main.color};
    }
  `}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph3',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  label,
  type,
  error,
  isTouched,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;

  return (
    <InputWrapper>
      <label htmlFor={name} aria-label={name}>{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        isFieldInvalid={isFieldInvalid}
        required
        {...props}
      />

      {isFieldInvalid && (
        <Text
          variant="paragraph5"
          color="error.main"
          textAlign="left"
          role="alert"
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

TextField.defaultProps = {
  error: '',
  isTouched: false,
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
