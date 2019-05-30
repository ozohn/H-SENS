/* eslint-disable no-underscore-dangle */
import React, { useState, useRef, useEffect } from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import getBase64 from '../../util/getBase64';
import InputForm from './Input';
import TuiEditor from './Editor';
import { EDIT_WORK, CREATE_WORK, SEE_WORK } from './WorkQueries';
import { WorkTitleValiation, WorkImageValiation } from './WorkValiation';

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
  float: right;
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

const EDIT = 'EDIT';
const CREATE = 'CREATE';

function WorksEditor({
  match: {
    params: { userid, workid },
  },
}) {
  const [worktitle, setWorkTitle] = useState();
  const [workdesc, setWorkDesc] = useState();
  const [workimage, setWorkImage] = useState();
  const workdescRef = useRef(null);
  const [titleError, setTitleError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const action = workid ? EDIT : CREATE;

  const getWorkInfo = useMutation(SEE_WORK, {
    variables: { workid },
  });

  useEffect(() => {
    if (!workid) return;
    getWorkInfo().then(result => {
      setWorkDesc(result.data.seeWork.workdesc);
      setWorkTitle(result.data.seeWork.worktitle);
      setWorkImage(result.data.seeWork.workimage);
    });
  }, []);

  const createWork = useMutation(CREATE_WORK, {
    variables: {
      worktitle,
      workdesc,
      workimage,
    },
  });

  const editWork = useMutation(EDIT_WORK, {
    variables: {
      workid,
      worktitle,
      workdesc,
      workimage,
      action,
    },
  });

  return (
    <Container>
      <Field>
        <Input
          type="text"
          placeholder="Title"
          onChange={e => {
            if (!e.target.value) setTitleError(true);
            else setTitleError(false);
            setWorkTitle(e.target.value);
          }}
          defaultValue={worktitle}
        />
      </Field>
      <Field editor="editor">
        {worktitle || !workid ? (
          <TuiEditor
            targetRef={workdescRef}
            initialValue={workdesc}
            setWorkDesc={setWorkDesc}
          />
        ) : null}
      </Field>
      <WorkTitleValiation error={titleError} />
      <WorkImageValiation error={imageError} />
      <FileLabel>
        Image
        <InputFile
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={e => {
            if (!e.target.value) setImageError(true);
            else setImageError(false);
            getBase64(e.target.files[0], setWorkImage);
          }}
        />
      </FileLabel>
      <Button
        onClick={async () => {
          if (titleError && imageError) return;
          if (!worktitle) {
            setTitleError(true);
            return;
          }
          if (!workimage) {
            setImageError(true);
            return;
          }
          if (action === EDIT) {
            await editWork();
          } else if (action === CREATE) {
            await createWork();
          }
          window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/${userid}`);
        }}
      >
        {action.toLowerCase()}
      </Button>
    </Container>
  );
}

export default withRouter(WorksEditor);
