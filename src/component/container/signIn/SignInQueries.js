import { gql } from 'apollo-boost';

const SIGN_IN = gql`
  mutation signIn($userid: String!, $password: String!) {
    signIn(userid: $userid, password: $password)
  }
`;

const LOCAL_SIGN_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export { SIGN_IN, LOCAL_SIGN_IN };
