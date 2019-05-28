import { gql } from 'apollo-boost';

export const EDIT_USER = gql`
  mutation editUser($userid: String!) {
    editUser(userid: $userid)
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      text
      user {
        username
      }
    }
  }
`;
