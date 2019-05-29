/* eslint-disable no-underscore-dangle */
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import MainLoadingAni from '../main/MainLoadingAni';

const SearchListContainer = styled.div`
  height: 85vh;
  width: 100%;
  overflow-y: scroll;
`;

const UserDataContainer = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  background: center/120% no-repeat url(${props => props.background});
`;

const DimLayer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  opacity: 0.5;
`;

const UserLink = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 13px -3px #000;
  width: 40%;
  height: 30vh;
  background: center / contain no-repeat url(${props => props.background});
  background-color: #fff;
`;

const WorkImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 1px 1px 13px -3px #000;
  width: 40%;
  height: 30vh;
  background: center / contain no-repeat url(${props => props.background});
  background-color: #fff;
`;

const SearchList = ({ history, location, loading, searched, filter }) => {
  if (loading) return <MainLoadingAni />;
  if (!searched.searchWork.length && !searched.searchUser.length)
    return <div>검색결과없음</div>;
  if (filter === 'Author') {
    const clickUser = userid => {
      history.push(`/${userid}`);
    };
    return (
      <SearchListContainer>
        {searched.searchUser.map(user => {
          return (
            <UserDataContainer key={user.userid} background={user.userimage}>
              <DimLayer />
              <UserLink
                background={user.userimage}
                onClick={() => clickUser(user.userid)}
              />
            </UserDataContainer>
          );
        })}
      </SearchListContainer>
    );
  }
  if (filter === 'Works') {
    return (
      <SearchListContainer>
        {searched.searchWork.map(work => {
          return (
            <UserDataContainer
              work={work}
              onClick={() => history.push(`/search${location.search}/${work.id}`)}
              key={work.id}
              background={work.workimage}
            >
              <DimLayer />
              <WorkImage background={work.workimage} />
            </UserDataContainer>
          );
        })}
      </SearchListContainer>
    );
  }
  return null;
};

export default withRouter(SearchList);
