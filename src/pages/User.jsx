import React, { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'
import useFetch from "../component/fetch.js";
import UserSetting from "./UserSetting.jsx";
import UserInfo from "./UserInfo.jsx";
import changeUserInfo from "../component/changeUserInfo.js";


function UserPage() {
  const [user, setUser]= useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    useFetch(
      `${process.env.REACT_APP_SERVER_URL}/creator`, 
      "POST", 
      {"Authorization": `Bearer ${localStorage.getItem("token")}`}
    ).then(user => {
      setUser(user);
    });
  }, []);

  return (
    <>
      {!editing?
        <UserInfo user={user} />:
        <UserSetting user={user} setUser={setUser} />
      }
      <ToggleButton user={user} setUser={setUser} editing={editing} setEditing={setEditing}/>
    </>
  );
}

function ToggleButton({editing, user, setEditing}){
  return (
    <Button onClick={()=> {
      console.log(user);
      if(editing) changeUserInfo(user, 1);
      setEditing(!editing);
    }}>
      {!editing?"Edit":"submit"}
    </Button>
  )
}


export default UserPage;
