import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import styled from 'styled-components';

const ExtBtn = styled(Button)`
  width: 100%;
`

const SignInForm = () => (
  <Form>
    <Form.Field>
      <input placeholder='아이디' />
    </Form.Field>
    <Form.Field>
      <input type='password' placeholder='비밀먼호' />
    </Form.Field>
    <ExtBtn type='submit'>로그인</ExtBtn>
  </Form>
)

export default SignInForm