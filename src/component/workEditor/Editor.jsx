import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor';

export default function TuiEditor({ targetRef, initialValue, setWorkDesc }) {
  return (
    <Editor
      initialValue={initialValue}
      previewStyle="vertical"
      height="400px"
      initialEditType="wysiwyg"
      ref={targetRef}
      onChange={() => setWorkDesc(targetRef.current.getInstance().getValue())}
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
  );
}
