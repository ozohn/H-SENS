import styled from 'styled-components';
<<<<<<< HEAD
import React from 'react';
import UserInfo from '../../container/user/UserInfo';
=======
import React, { useEffect, useState } from 'react';
import UserInfo from './UserInfo';
>>>>>>> df5d6e1c3bceaaa751f01ae3eb95979886ee4011
import Works from './Works';
import fetchData from '../../../util/fetchData';

const User = styled.div`
  position: relative;
  height: 200vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  font-weight: bold;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

function UserPage({ location }) {
  const [pageLoading, setPageLoading] = useState(true);
  const [searchedUserData, setSearchedUserData] = useState(null);
  const [searchedWorksData, setSearchedWorksData] = useState(null);
  useEffect(() => {
    if (location.state) {
      console.log(location);
      const jsonHeader = {
        'Content-Type': 'application/json',
      };
      const body = {
        userid: location.state.userid,
      };
      const signUpUrl = `${process.env.REACT_APP_SERVER_URL}/search/author/pages`;
      const res = fetchData(signUpUrl, 'POST', jsonHeader, JSON.stringify(body));
      res.then(jsonData => {
        setSearchedUserData(jsonData.user);
        setSearchedWorksData(jsonData.works);
        setPageLoading(false);
      });
    } else {
      setPageLoading(false);
    }
  }, [location]);
  return pageLoading ? (
    <></>
  ) : (
    <User>
      <UserInfo searchedData={searchedUserData} />
      <Works searchedData={searchedWorksData} />
    </User>
  );
}

export default UserPage;
