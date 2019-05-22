import React from 'react';
import AuthInput from '../../presenter/forms/AuthInput';
import AuthError from '../../presenter/errors/AuthError';

const PwContent = ({ pw, checkPw }) => {
  const errorMessage = '비밀번호는 특수문자/문자/숫자 조합의 8-15 글자여야 합니다.';
  return (
    <>
      <AuthInput
        type="password"
        placeholder="PW"
        onChange={checkPw}
        error={pw.b ? null : !pw.b}
      />
      {pw.b ? null : <AuthError>{errorMessage}</AuthError>}
    </>
  );
};

export default PwContent;
