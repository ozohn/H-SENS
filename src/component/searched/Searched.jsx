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

const Searched = ({ location: { search }, match }) => {
  const query = search.split('=');
  const term = query[1].split('&')[0];
  const select = query[2];
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: { term },
  });
  
  return (
    <>
      <Header />
      {search.split('/')[1] && <WorkDetail searched={search} />}
      <SearchList searched={data} loading={loading} filter={select} />
    </>
  );
};

export default withRouter(Searched);
