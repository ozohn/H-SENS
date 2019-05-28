import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';

import MainLogo from '../icons/MainLogo';
import UserLinkBtn from '../buttons/UserLinkBtn';
import Search from '../../container/search/Search';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  border: 1px solid #bbb;
  border-top: 0.4rem solid #2EC4B6
  padding: 1%;
  height: 15vh;
  background-color: #EFFFE9
`;

const QUERY = gql`
  {
    currentUser {
      userid
      userimage
    }
  }
`;

const Header = ({ isLoggedIn }) => {
  const { data, loading } = useQuery(QUERY);
  if (!loading) {
    return (
      <HeaderContainer className="header">
        <MainLogo as={Link} to="/" />
        <Search />
        <UserLinkBtn
          to={isLoggedIn ? `/${data.currentUser.userid}` : '/signin'}
          userimage={isLoggedIn ? data.currentUser.userimage : null}
        />
      </HeaderContainer>
    );
  }
  return null;
};

export default Header;
