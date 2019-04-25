import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import Header from '../header';
import Author from '../component/author/Author';

const Searched = ({ location }) => {
  const sentValue = location.state.value;
  const authors = sentValue.authors.filter(author => {
    return author.username.match(sentValue.inputValue);
  });

  return (
    <>
      <Header userImage={sentValue.userImage} authors={sentValue.authors} />
      <Author authors={authors} />
    </>
  );
};

export default Searched;
