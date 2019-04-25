import React, { useEffect, useState } from 'react';
import List from '../component/list/List';
import Author from '../component/author/Author';
import Header from '../header';
import useFetch from '../component/fetch';

const getAuthorData = async () => {
  const fetchedData = await useFetch(
    `${process.env.REACT_APP_SERVER_URL}/main/users`,
    'POST',
  );
  return fetchedData;
};

const getUserData = async () => {
  const fetchedData = await useFetch(
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
    const fetchedData = getAuthorData();
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
      <Header userImage={userImage} />
      <Author authors={authorData} />
      <List />
    </>
  );
};

export default MainPage;
