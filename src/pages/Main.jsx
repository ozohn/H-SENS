import React, { useEffect, useState } from 'react';
import List from '../component/list/List.jsx';
import Author from '../component/author/Author.jsx';
import Header from '../header.js';
import useFetch from '../component/fetch.js';

const getUserData = async () => {
  return await useFetch(`${process.env.REACT_APP_SERVER_URL}/main/users`, 'POST');
};

const MainPage = props => {
  const [authorData, setAuthorData] = useState('');

  useEffect(() => {
    const fetchedData = getUserData();
    fetchedData.then(user => {
      setAuthorData(user);
    });
  }, []);

  return (
    <>
      <Header />
      <Author authors={authorData} />
      <List />
    </>
  );
};

export default MainPage;
