import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import Header from './Header';
import SearchList from '../../container/searchList/SearchList';
import WorkDetail from '../../container/work/WorkDetail';

export const SEARCH = gql`
  query search($term: String!) {
    searchUser(term: $term) {
      userid
      username
      userimage
    }
  }
`;

const Searched = ({ location: { search } }) => {
  const term = search.split('=')[1];
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: { term },
  });
  return (
    <>
      <Header />
      {/* <WorkDetail searched /> */}
      <SearchList searched={data} loading={loading} />
    </>
  );
};

export default withRouter(Searched);
