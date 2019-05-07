import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor';
import fetchData from '../component/fetchData';
import getBase64 from '../component/getBase64';
import { WorkContext } from '../context/work/workContext';
import InputForm from '../component/form/Input';

const Button = styled.button`
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

function WorksEditor({ setEditing, editing }) {
  const { addWork } = useContext(WorkContext);
  const workDesc = useRef(null);
  const [workimage, setWorkimage] = useState('');
  const [worktitle, setWorktitle] = useState('');

  return (
    <>
      <Button
        onClick={() => {
          addWork({
            userdesc: workDesc.current.getInstance().getValue(),
            workimage,
            worktitle,
          });
          setEditing(!editing);
        }}
      >
        submit
      </Button>
      <InputForm
        Tag={Input}
        cb={setWorktitle}
        placeholder="Name"
        label="Who are you?"
        type="text"
      />
      <input type="file" onChange={e => getBase64(e.target.files[0], setWorkimage)} />
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="400px"
        initialEditType="wysiwyg"
        ref={workDesc}
        exts={[
          {
            name: 'chart',
            minWidth: 100,
            maxWidth: 600,
            minHeight: 100,
            maxHeight: 300,
          },
          'scrollSync',
          'colorSyntax',
          'uml',
          'mark',
          'table',
        ]}
      />
    </>
  );
}

export default WorksEditor;
