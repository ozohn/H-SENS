import React, { useEffect, useState } from 'react';
import List from '../component/list/List';
import Header from '../component/header/header';
import fetchData from '../component/fetchData';

const getWorksData = async () => {
  const fetchedData = await fetchData(
    `${process.env.REACT_APP_SERVER_URL}/main/works`,
    'POST',
  );
  return fetchedData;
};

const getUserData = async () => {
  const fetchedData = await fetchData(
    `${process.env.REACT_APP_SERVER_URL}/creator`,
    'POST',
    {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  );
  return fetchedData;
};

const MainPage = () => {
  const [userImage, setUserImage] = useState('');
  const [authorData, setAuthorData] = useState('');

  useEffect(() => {
    const fetchedData = getWorksData();
    fetchedData.then(user => {
      setAuthorData(user);
    });
    const hasToken = !!window.localStorage.token;
    if (hasToken) {
      const fetchedUserData = getUserData();
      fetchedUserData.then(user => {
        setUserImage(user.userimage);
      });
    }
  }, []);

  return (
    <>
      <Header userImage={userImage} authors={authorData} />
      <List />
    </>
  );
};

export default MainPage;
