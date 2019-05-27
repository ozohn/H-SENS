import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import AppPath from './router/router';

const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const App = () => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  return (
    <>
      <AppPath isLoggedIn={isLoggedIn} />
    </>
  );
};

export default App;
