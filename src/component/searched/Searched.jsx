import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import Header from '../header/Header';
import SearchList from './SearchList';
import WorkDetail from '../workDetail/WorkDetail';

export const SEARCH = gql`
  query search($term: String!) {
    searchUser(term: $term) {
      userid
      username
      userimage
    }
    searchWork(term: $term) {
      id
      worktitle
      workimage
    }
  }
`;

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Searched = ({ location: { search } }) => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  const query = search.split('=');
  const term = decodeURIComponent(query[1].split('&')[0]);

  const select = query[2];
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: { term },
  });

  const workArr = select.split('/');
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      {workArr[1] && <WorkDetail search={search} searchWork={workArr[1]} />}
      <SearchList searched={data} loading={loading} filter={select} />
    </>
  );
};

export default withRouter(Searched);
