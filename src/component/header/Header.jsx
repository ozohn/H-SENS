import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import PumpLoadingAni from '../authorization/PumpLoadingAni';
import MainLogo from './MainLogo';
import UserLinkBtn from './UserLinkBtn';
import Search from './search/Search';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid #bbb;
  padding: 1%;
  height: 15vh;
  background-color: #ffffffcc;
`;

const HeaderLoadingAni = styled(PumpLoadingAni)`
  display: block;
  border: 1px solid #011627;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
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
  return (
    <HeaderContainer className="header">
      <MainLogo as={Link} to="/" />
      <Search />
      <HeaderLoadingAni />
    </HeaderContainer>
  );
};

export default Header;
