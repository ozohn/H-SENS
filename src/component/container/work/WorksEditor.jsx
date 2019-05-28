/* eslint-disable no-underscore-dangle */
import React, { useState, useRef } from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';
import { Link, withRouter } from 'react-router-dom';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import getBase64 from '../../../util/getBase64';
import InputForm from '../../presenter/forms/Input';
import TuiEditor from '../../presenter/editors/Editor';
import { EDIT_WORK, CREATE_WORK, SEE_WORK_BY_ID, SEE_WORK } from './WorkQueries';

const Container = styled.div`
  width: 60vw;
  padding: 4rem 4rem 4rem;
`;

const Field = styled.div`
  margin-bottom: 7rem;
  border: ${props => (props.editor ? '0.2rem solid #231f20' : 0)};
`;

const Button = styled.button`
  color: #95bfb4;
  margin-left: 25rem;
  display: inline-block;
  vertical-align: bottom;
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  color: #231f20;
  background-color: #55fe47;
  &:hover {
    color: #231f20;
  }
`;
const Input = styled.input`
  display: inline-block;
  margin-left: 4rem;
  padding-left: 1rem;
  width: 22rem;
  border: 0;
  border-bottom: 0.2rem solid #231f20;
  outline: 0;
  font-size: 4rem;
  font-weight: bold;
  background: transparent;
  color: #1f272f;
  vertical-align: top;
  &:focus {
    border-bottom: 0.2rem solid #55fe47;
  }
`;
const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  outline: 0;
  opacity: 0;
  pointer-events: none;
  user-select: none;
`;
const FileLabel = styled.label`
  padding: 3rem 0 2.4rem;
  position: relative;
  display: inline-block;
  width: 14rem;
  border: 2px solid #231f20;
  background-color: #231f20;
  font-size: 2rem;
  font-weight: bold;
  color: #54ff47;
  transition: border 300ms ease;
  cursor: pointer;
  text-align: center;
`;

const QUERY = gql`
  query seeWork($workid: String!) {
    seeWork(workid: $workid) {
      workdesc
      workname
      workimage
    }
  }
`;

function WorksEditor({
  match: {
    params: { userid, workid },
  },
}) {
  const submitText = workid ? 'Edit' : 'Create';
  const workdesc = useRef(null);
  const [workimage, setWorkimage] = useState('');
  const [worktitle, setWorktitle] = useState('');
  const { data, loading } = useQuery(SEE_WORK, {
    variables: { workid },
  });

  const createWork = useMutation(CREATE_WORK, {
    variables: {
      worktitle,
      workdesc: workdesc.current && workdesc.current.getInstance().getValue(),
      workimage,
    },
  });
  const editWork = useMutation(EDIT_WORK, {
    variables: {
      worktitle,
      workdesc: workdesc.current && workdesc.current.getInstance().getValue(),
      workimage,
    },
  });

  return (
    <Container>
      <Field>
        <InputForm
          Tag={Input}
          cb={setWorktitle}
          placeholder="Name"
          label="Title"
          type="text"
          // value={work ? work.worktitle : ''}
        />
      </Field>
      <Field editor="editor">
        <TuiEditor targetRef={workdesc} initialValue="cdsa" />
      </Field>
      <FileLabel>
        Image
        <InputFile
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={e => getBase64(e.target.files[0], setWorkimage)}
        />
      </FileLabel>
      <Button
        onClick={async () => {
          if (submitText === 'Edit') {
            await editWork();
          } else if (submitText === 'Create') {
            await createWork();
          }
          window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/${userid}`);
        }}
      >
        {submitText}
      </Button>
    </Container>
  );
}

export default withRouter(WorksEditor);
