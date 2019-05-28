import { gql } from 'apollo-boost';

const EDIT_WORK = gql`
  mutation editWork($worktitle: String, $workdesc: String, $workimage: String) {
    editUser(worktitle: $worktitle, workimage: $workimage, workdesc: $workdesc) {
      worktitle
      workdesc
      workimage
    }
  }
`;

const DELETE_WORK = gql`
  mutation deleteWork($workid: String) {
    deleteUser(workid: $workid)
  }
`;

export { DELETE_WORK, EDIT_WORK };
