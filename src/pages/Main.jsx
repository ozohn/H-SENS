import React, { useContext } from 'react';
import List from '../component/list/List';
import Header from '../component/header/header';

import { MainContext } from '../context/main/mainContext';

const MainPage = () => {
  const mainContext = useContext(MainContext);
  return (
    <>
      <Header user={mainContext.state.user} />
      <List />
    </>
  );
};

export default MainPage;
