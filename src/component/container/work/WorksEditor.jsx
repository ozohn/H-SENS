/* eslint-disable no-underscore-dangle */
import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getBase64 from '../../../util/getBase64';
import { WorkContext } from '../../../context/work/workContext';
import InputForm from '../../presenter/forms/Input';
import TuiEditor from '../../presenter/editors/Editor';

const Container = styled.div`
  width: 60vw;
  padding: 4rem 4rem 4rem;
`;

const Field = styled.div`
  margin-bottom: 7rem;
  border: ${props => (props.editor ? '0.2rem solid #231f20' : 0)};
`;

const Button = styled(Link)`
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

function WorksEditor({ location }) {
  const { submit, work } = location.state;
  const { addWork, modifyWorkInfo } = useContext(WorkContext);
  const workdesc = useRef(null);
  const [workimage, setWorkimage] = useState('');
  const [worktitle, setWorktitle] = useState(work ? work.worktitle : '');

  return (
    <Container>
      <Field>
        <InputForm
          Tag={Input}
          cb={setWorktitle}
          placeholder="Name"
          label="Title"
          type="text"
          value={work ? work.worktitle : ''}
        />
      </Field>
      <Field editor="editor">
        <TuiEditor targetRef={workdesc} initialValue={work ? work.workdesc : ''} />
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
        to="/user"
        text={submit}
        onClick={() => {
          const body = {
            id: work ? work._id : null,
            workdesc: workdesc.current.getInstance().getValue(),
            workimage: work ? work.workimage : workimage,
            worktitle,
          };
          if (submit === 'Edit') {
            modifyWorkInfo(body);
          } else {
            addWork(body);
          }
        }}
      >
        {submit}
      </Button>
    </Container>
  );
}

export default WorksEditor;
