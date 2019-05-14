import React from 'react';
import AuthInput from '../../presenter/forms/AuthInput';
import AuthError from '../../presenter/errors/AuthError';

const RePwContent = ({ rePw, checkRePw }) => {
  const errorMessage = '비밀번호와 같지 않습니다.';

  return (
    <>
      <AuthInput
        type="password"
        placeholder="PW RE"
        onChange={checkRePw}
        error={rePw ? null : !rePw}
      />
      {rePw ? null : <AuthError>{errorMessage}</AuthError>}
    </>
  );
};

export default RePwContent;
