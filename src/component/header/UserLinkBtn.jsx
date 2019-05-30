import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserLinkStyled = styled(Link)`
  display:block;
  background-image: url("${props =>
    props.userimage || `${process.env.REACT_APP_CLIENT_URL}/image/blank.png`}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #011627;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
`;

export default UserLinkStyled;
