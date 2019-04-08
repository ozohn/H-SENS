import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// import useFetch from '../fetch.js';

const UserImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: 30rem
  width: 30rem;
  height: 30rem;
  border: 1px solid #bbb;
`;

const UserPage = () => {
  const [userImage, setUserImage] = useState(null)
  
  useEffect(() => {
    // const userData = useFetch('http://localhost:5000/user');
    const userData = {name: 'head', image: "https://bit.ly/fcc-relaxing-cat", description: '날이 좋아서.. 날이 좋지 않아서.. 날이 적당해서,,'}
    
    setUserImage(userData.image)
  })

  return (
    <UserImage url={userImage}>
    </UserImage>
  )
};

export default UserPage;
