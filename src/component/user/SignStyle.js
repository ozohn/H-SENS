import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const StyledInput = styled.input`
  font-size: 1.3rem;
  position: relative;
  padding: 0;
  border: 0;
  color: #011627;
  border-bottom: 1px solid #011627;
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
  font-size: 1.6rem;
  margin-top: 1vh;
  height: 5vh;
  border: 0;
  width: 100%;
  text-align: center;
  border: 1px solid transparent;
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

export { StyledInput, WholeContainer, ExtBtn, SignUpBtn, SignLogo, Container };
