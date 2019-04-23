import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import styled from "styled-components";

const FormContainer = styled.div`
  padding-left: 8rem;
  width: 50rem;
`;

function UserSetting({ user, setUser }) {
  const [userName, setUserName] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    setUser({
      username: userName ? userName : user.username,
      userdesc: userDesc ? userDesc : user.userdesc,
      userimage: userImage ? userImage : user.userimage
    });
  }, [userName, userDesc, userImage]);

  return (
    <FormContainer>
      <Form>
        <Form.Input
          label="user name"
          placeholder="name"
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <Form.Field
          label="user description"
          control="textarea"
          rows="3"
          onChange={e => setUserDesc(e.target.value)}
        />
      </Form>
      <div>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={e => getBase64(e.target.files[0], setUserImage)}
        />
      </div>
    </FormContainer>
  );
}

function getBase64(file, setUserImage) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    setUserImage(reader.result);
  };
  reader.onerror = function(error) {
    console.error("Error: ", error);
  };
}

export default UserSetting;
