import { gql } from 'apollo-boost';

const SIGN_IN = gql`
  mutation signIn($userid: String!, $password: String!) {
    signIn(userid: $userid, password: $password)
  }
`;

export default SIGN_IN;
