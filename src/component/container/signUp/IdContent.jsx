import React from 'react';
import AuthInput from '../../presenter/forms/AuthInput';
import AuthError from '../../presenter/errors/AuthError';

const IdContent = ({ id, checkId }) => {
  const errorMessage = '중복된 아이디이거나 6-12글자가 아닙니다.';
  return (
    <>
      <AuthInput placeholder="ID" onBlur={checkId} error={id.b ? null : !id.b} />
      {id.b ? null : <AuthError>{errorMessage}</AuthError>}
    </>
  );
};

export default IdContent;
