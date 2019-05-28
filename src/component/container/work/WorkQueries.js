import { gql } from 'apollo-boost';

const EDIT_WORK = gql`
  mutation editWork(
    $worktitle: String
    $workdesc: String
    $workimage: String
    $userid: String!
  ) {
    editWork(
      worktitle: $worktitle
      workdesc: $workdesc
      workimage: $workimage
      userid: $userid
    ) {
      worktitle
      workdesc
      workimage
    }
  }
`;

const SEE_WORK_BY_ID = gql`
  query seeWorkById($id: String) {
    seeWorkById(id: $id) {
      worktitle
      workdesc
      workimage
    }
  }
`;
const CREATE_WORK = gql`
  mutation createWork(
    $worktitle: String
    $workdesc: String
    $workimage: String
    $userid: String!
  ) {
    createWork(
      worktitle: $worktitle
      workdesc: $workdesc
      workimage: $workimage
      userid: $userid
    )
    worktitle
    workdesc
    worktitle
  }
`;

export { EDIT_WORK, CREATE_WORK, SEE_WORK_BY_ID };
