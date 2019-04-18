import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";
import { Button, Divider, Form } from 'semantic-ui-react'
import useFetch from "../fetch.js";

import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

const UserImage = styled.div`
  background-image: url(${props => props.url});
  background-size: 30rem
  width: 30rem;
  height: 30rem;
  border: 1px solid #bbb;
`;

function UserPage() {
  const [userImg, setUserImg] = useState("");
  const [userWorks, setUserWorks] = useState([]);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/creator`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => console.log(res));
  });
  useEffect(() => {
    fetch(`${process.env.REACT_APP_CLIENT_URL}/image/person.jpg`).then(res =>
      setUserImg(res.url)
    );
  });
  useEffect(() => {
    const initialWorks = { id: 1, title: "works" };
    setUserWorks([...userWorks, initialWorks]);
  }, []);

  return (
    <>
      <UserInfo userImg={userImg} />
      <WorksList works={userWorks} />
      
      <FilePond
        files={files}
        allowMultiple={true}
        maxFiles={3}
        server={process.env.REACT_APP_SERVER_URL}
        onupdatefiles={fileItems => {
          // Set current file objects to this.state
          setFiles(fileItems.map(fileItem => fileItem.file));
        }}
      />
    </>
  );
}

function UserInfo({ userImg }) {
  return (
    <>
      <Image src={userImg} size="small" circular />
      <Form>
        <Form.Input label='name' placeholder='name' />
        <Form.Field label='An HTML <textarea>' control='textarea' rows='3' />
        <Form.Field label='An HTML <button>' control='button'>
          HTML Button
        </Form.Field>
      </Form>
    </>
  );
}

function WorksList({ works }) {
  return works.map(item => <Work item={item} />);
}

function Work({ item }) {
  return <div key={item.id}>{item.title}</div>;
}

export default UserPage;
