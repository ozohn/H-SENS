import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
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
      userimage
    }
  }
`;

const Header = ({ isloggedIn }) => {
  const { data, loading } = useQuery(QUERY);

  if (!loading) {
    const {
      currentUser: { userimage },
    } = data;
    return (
      <HeaderContainer className="header">
        <MainLogo />
        <Search />
        <UserLinkBtn
          to={isloggedIn ? '/user' : '/signin'}
          userimage={isloggedIn ? userimage : null}
          // onClick={() => syncCurDataByUserData()}
        />
      </HeaderContainer>
    );
  }
  return null;
};

export default Header;
