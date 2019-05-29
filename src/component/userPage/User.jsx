import styled from 'styled-components';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import UserInfo from './UserInfo';
import Works from './works/Works';

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

const QUERY = gql`
  query seeUser($userid: String!) {
    seeUser(userid: $userid) {
      userdesc
      username
      userimage
      works {
        id
        workimage
      }
    }
  }
`;

function UserPage({
  match: {
    params: { userid },
  },
}) {
  const { data, loading } = useQuery(QUERY, {
    variables: { userid },
  });

  if (loading) return null;
  return (
    <User>
      <UserInfo
        userid={userid}
        username={data.seeUser.username}
        userdesc={data.seeUser.userdesc}
        userimage={data.seeUser.userimage}
      />
      <Works works={data.seeUser.works} userid={userid} />
    </User>
  );
}

export default withRouter(UserPage);
