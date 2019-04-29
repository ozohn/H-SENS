import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor';
import fetchData from '../component/fetchData';
import getBase64 from '../component/getBase64';

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

function handleClick(inputName, workImage, inputDesc) {
  const body = {
    worktitle: inputName.current.value,
    workimage: workImage,
    workdesc: inputDesc.current.getInstance().getValue(),
  };
  fetchData(
    `${process.env.REACT_APP_SERVER_URL}/works/add`,
    'POST',
    {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    JSON.stringify(body),
  );
}

function WorksEditor({ setCreating, creating }) {
  const inputName = useRef(null);
  const inputDesc = useRef(null);
  const [workImage, setWorkImage] = useState('');

  return (
    <>
      <Button
        onClick={e => {
          e.preventDefault();
          handleClick(inputName, workImage, inputDesc);
          setCreating(!creating);
        }}
      >
        submit
      </Button>
      <input type="text" ref={inputName} />
      <input type="file" onChange={e => getBase64(e.target.files[0], setWorkImage)} />
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="400px"
        initialEditType="wysiwyg"
        ref={inputDesc}
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
