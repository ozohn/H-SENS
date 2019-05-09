import React from 'react';
import List from '../component/list/List';
<<<<<<< HEAD
// import Header from '../component/header/header';

import { MainContext } from '../context/main/mainContext';

const MainPage = () => {
  const { state } = useContext(MainContext);
  console.log(state);
=======
import Header from '../component/header/header';

const MainPage = () => {
>>>>>>> 6e5cdc3a0c286e5fcd79918e862c96fbd1749cb2
  return (
    <>
      <Header />
      <List />
    </>
  );
};

export default MainPage;
