import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import Header from '../component/header/header';

const Searched = ({ location }) => {
  const sentValue = location.state.value;

  return (
    <>
      <Header userImage={sentValue.userImage} authors={sentValue.authors} />
    </>
  );
};

export default Searched;
