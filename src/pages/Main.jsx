import React, { Component } from 'react';
import List from "../component/list/List.jsx";
import Author from "../component/author/Author.jsx";
import Header from '../header.js';

class MainPage extends Component {
    render() {
      return (
        <>
          <Header />
          <Author />
          <List />
        </>
      );
    }
  }
  
  export default MainPage;