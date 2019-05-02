import styled, { keyframes } from 'styled-components';

const pump = keyframes`
  from {
    transform: scale(0.7, 0.7)
  }
  to {
    transform: scale(1, 1);
  }
`;
const LoadingAni = styled.div`
  border: 1px solid #000;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  animation: ${pump} 0.3s linear infinite;
`;
const StyledInput = styled.input`
  font-size: 1.3rem;
  position: relative;
  padding: 0;
  border: 0;
  color: #011627;
  border-bottom: 1px solid ${props => (props.error ? '#ff4100' : '#011627')};
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
const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
const ExtBtn = styled.button`
  display: flex;
  font-size: 1.6rem;
  margin-top: 1vh;
  height: 5vh;
  border: 0;
  width: 100%;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #95bfb4;
  }
`;
const SignUpBtn = styled.button`
  margin-top: 1vh;
  color: #888;
  font-size: 1rem;
  width: 15%;
  float: right;
  &:hover {
    color: #011627;
  }
`;
const SignLogo = styled.div`
  display: flex;
  width: 14rem;
  padding-top: 15%;
  background: no-repeat url('./image/H-SensEx.png');
  background-size: contain;
  margin: 0 auto;
  height: 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 0 auto;
`;
const Error = styled.div`
  padding-top: 0.3rem;
  height: 1.3rem;
  width: 100%;
  font-size: 1rem;
  color: #ff4100;
`;

export {
  StyledInput,
  WholeContainer,
  ExtBtn,
  SignUpBtn,
  SignLogo,
  Container,
  LoadingAni,
  Error,
};
