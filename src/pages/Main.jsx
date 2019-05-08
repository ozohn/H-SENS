import React, { useContext } from 'react';
import List from '../component/list/List';
// import Header from '../component/header/header';

import { mainContext } from '../context/main/mainContext';

const MainPage = () => {
  const { state } = useContext(mainContext);
  console.log(state);
  return (
    <>
      {/* <Header userImage={userImage} authors={authorData} /> */}
      <List />
    </>
  );
};

export default MainPage;
