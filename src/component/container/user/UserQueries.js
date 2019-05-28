import { gql } from 'apollo-boost';

const EDIT_USER = gql`
  mutation editUser($username: String, $userdesc: String, $userimage: String) {
    editUser(username: $username, userimage: $userimage, userdesc: $userdesc) {
      username
      userdesc
      userimage
    }
  }
`;
export default EDIT_USER;
