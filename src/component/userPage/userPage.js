import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import useFetch from '../fetch.js';

const UserImage = styled.div`
  background-image: url(${(props) => props.url})
`;

const UserPage = () => {
  const [userImage, setUserImage] = useState(null)
  
  useEffect(() => {
    const userData = useFetch('http://localhost:5000/user');
    setUserImage(userData.image)
  })

  return (
    <UserImage url={userImage}>
    </UserImage>
  )
};

export default UserPage;
