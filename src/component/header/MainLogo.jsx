import styled from 'styled-components';

const MainLogo = styled.div`
  width: 13rem;
  height: 4rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url('${process.env.REACT_APP_CLIENT_URL}/image/HsensLogo.png');
  background-size: contain;
  margin: 0 auto;
`;

export default MainLogo;
