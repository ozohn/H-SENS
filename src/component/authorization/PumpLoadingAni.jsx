import styled, { keyframes } from 'styled-components';

const pump = keyframes`
  from {
    transform: scale(0.7, 0.7)
  }
  to {
    transform: scale(1, 1);
  }
`;
const PumpLoadingAni = styled.div`
  border: 1px solid #000;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  animation: ${pump} 0.3s linear infinite;
`;

export default PumpLoadingAni;
