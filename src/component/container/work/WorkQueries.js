import { gql } from 'apollo-boost';

const SEE_WORK_BY_ID = gql`
  query seeWorkById($workid: String) {
    seeWorkById(workid: $workid) {
      worktitle
      workdesc
      workimage
    }
  }
`;

const SEE_WORK = gql`
  query seeWork($workid: String!) {
    seeWork(workid: $workid) {
      worktitle
      workdesc
      workimage
    }
  }
`;

const CREATE_WORK = gql`
  mutation createWork($worktitle: String!, $workdesc: String, $workimage: String) {
    createWork(worktitle: $worktitle, workdesc: $workdesc, workimage: $workimage) {
      worktitle
      workdesc
      workimage
    }
  }
`;

const EDIT_WORK = gql`
  mutation editWork(
    $workid: String!
    $worktitle: String!
    $workdesc: String
    $workimage: String
    $action: String!
  ) {
    editWork(
      workid: $workid
      worktitle: $worktitle
      workdesc: $workdesc
      workimage: $workimage
      action: $action
    ) {
      worktitle
      workdesc
      workimage
    }
  }
`;

export { EDIT_WORK, CREATE_WORK, SEE_WORK_BY_ID, SEE_WORK };
