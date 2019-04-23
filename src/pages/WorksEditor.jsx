import React, { useRef } from "react";
import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor.min.css";
import "tui-editor/dist/tui-editor-contents.min.css";
import { Editor } from "@toast-ui/react-editor";
import useFetch from "../component/fetch.js";

function handleClick(inputEl) {
  const body = {
    portfolioname: portfolioname.name,
    portfoliodesc: inputEl.current.getInstance().getValue()
  };
  useFetch(`${process.env.REACT_APP_SERVER_URL}/portfolio`, "POST", {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }).then(user => {
    setUser(user);
  });
}

function WorksEditor() {
  const inputEl = useRef(null);

  return (
    <>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        ref={inputEl}
        exts={[
          {
            name: "chart",
            minWidth: 100,
            maxWidth: 600,
            minHeight: 100,
            maxHeight: 300
          },
          "scrollSync",
          "colorSyntax",
          "uml",
          "mark",
          "table"
        ]}
      />
      <button onClick={() => handleClick(inputEl)}>make bold</button>
    </>
  );
}

export default WorksEditor;
