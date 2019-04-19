import React from 'react';
import { Image } from 'semantic-ui-react';

export default function UserInfo({ user }) {
  return (
    <div>
      <Image src={user.userimage} size="small" circular />
      <h2>{user.username}</h2>
      <p>{user.userdesc}</p>
    </div>
  );
}
