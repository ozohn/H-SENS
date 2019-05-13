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

export default AuthInput;
