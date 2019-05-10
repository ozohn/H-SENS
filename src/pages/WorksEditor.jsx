import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getBase64 from '../component/getBase64';
import { WorkContext } from '../context/work/workContext';
import InputForm from '../component/form/Input';
import TuiEditor from '../component/editor/Editor';

const Button = styled(Link)`
  margin-top: 2rem;
  border: 0;
  outline: none;
  font-size: 2.2rem;
  background-color: transparent;
  color: #ff4d4d;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #ff4d4d;
  }
  &&& {
    float: right;
  }
`;
const Input = styled.input`
  width: 50vw;
  margin: 4rem 0 4rem 0;
  border: 0;
  border-bottom: 0.2rem solid #95bfb4;
  outline: 0;
  font-size: 4rem;
  font-weight: bold;
  background: transparent;
  color: #1f272f;
`;

function WorksEditor({ location }) {
  const { submit, work } = location.state;
  const { addWork, modifyWorkInfo } = useContext(WorkContext);
  const workdesc = useRef(null);
  const [workimage, setWorkimage] = useState('');
  const [worktitle, setWorktitle] = useState(work ? work.worktitle : '');

  return (
    <>
      <Button
        to="/user"
        onClick={() => {
          const body = {
            id: work._id,
            workdesc: workdesc.current.getInstance().getValue(),
            workimage,
            worktitle,
          };
          if (submit === 'Edit') {
            modifyWorkInfo(body);
          } else if (submit === 'Add') {
            addWork(body);
          }
        }}
      >
        {submit}
      </Button>
      <InputForm
        Tag={Input}
        cb={setWorktitle}
        placeholder="Name"
        label="Title"
        type="text"
        value={work ? work.worktitle : ''}
      />
      <input type="file" onChange={e => getBase64(e.target.files[0], setWorkimage)} />
      <TuiEditor targetRef={workdesc} initialValue={work ? work.workdesc : ''} />
    </>
  );
}

export default WorksEditor;
