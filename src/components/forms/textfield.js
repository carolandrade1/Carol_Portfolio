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
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph2',
};

export default function TextField({
  placeholder, name, onChange, value, id, label,
}) {
  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <Input type="text" id={id} placeholder={placeholder} name={name} onChange={onChange} value={value} />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
