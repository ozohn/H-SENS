import React from 'react';
import styled from 'styled-components';

const AuthInput = styled.input`
  font-size: 1.3rem;
  position: relative;
  padding: 0;
  border: 0;
  color: #011627;
  border-bottom: 0.2rem solid ${props => (props.error ? '#ff4100' : '#95bfb4')};
  outline: none;
  width: 100%;
  height: 5vh;
  margin-top: 1.3rem;
  transition: all 0.3s;
  &:focus {
    font-size: 1.5rem;
    transition: all 0.5s;
  }
`;
const AuthLabel = styled.label`
  &:after {
    display: ${props => (props.error ? 'block' : 'none')}
    content: "${props => props.errorMessage}";
    padding-top: 0.3rem;
    height: 1.3rem;
    width: 100%;
    font-size: 1rem;
    color: #ff4100;
  }
`;

const AuthInputWrapper = ({
  error,
  errorMessage,
  type,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <AuthLabel error={error} errorMessage={errorMessage}>
      <AuthInput
        error={error}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </AuthLabel>
  );
};

export default AuthInputWrapper;
