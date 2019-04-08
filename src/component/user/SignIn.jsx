import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const checkPassWord = (e, props) => {
  const passRule = /^[A-Za-z0-9]{6,12}$/
  if(!passRule.test(e.value)) {
    props.setState('hi')
  }
}

const SignIn = (props) => {
  return (
    <form method='POST' action='localhost:3000/signin'>
      id : <input className='id' />
      password: <input className='password' onChange={checkPassWord}/>
      <Link to='/signup'>회원가입</Link>
    </form>
  )
}

export default SignIn