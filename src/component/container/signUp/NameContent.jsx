import React from 'react';
import AuthInput from '../../presenter/forms/AuthInput';
import AuthError from '../../presenter/errors/AuthError';

const NameContent = ({ name, checkName }) => {
  const errorMessage = '이름을 입력해주셔야 합니다.';

  return (
    <>
      <AuthInput
        placeholder="Name"
        onChange={checkName}
        error={name.b ? null : !name.b}
      />
      {name.b ? null : <AuthError>{errorMessage}</AuthError>}
    </>
  );
};

export default NameContent;
