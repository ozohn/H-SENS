import { gql } from 'apollo-boost';

const CONFIRM_ID = gql`
  mutation confirmId($userid: String!) {
    confirmId(userid: $userid)
  }
`;

const CREATE_ACCOUNT = gql`
  mutation createAccount($userid: String!, $username: String!, $password: String!) {
    createAccount(userid: $userid, username: $username, password: $password)
  }
`;

export { CREATE_ACCOUNT, CONFIRM_ID };
