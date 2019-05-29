import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: none;
`;

const Heading3 = styled.h3`
  margin: 0;
  margin-top: 1rem;
  font-size: 4rem;
  color: #231f20;
  display: inline-block;
  vertical-align: top;
`;

function InputForm({ Tag, cb, placeholder, label, type, value, textValue }) {
  return (
    <>
      <Heading3>{label}</Heading3>
      <Label>{label}</Label>
      <Tag
        type={type}
        placeholder={placeholder}
        onChange={e => {
          cb(e.target.value);
        }}
        defaultValue={value}
        value={textValue}
      />
    </>
  );
}

export default InputForm;
