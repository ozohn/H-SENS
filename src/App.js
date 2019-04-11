import React, { Component } from 'react';
import List from "./component/list/List.jsx";
import Author from "./component/author/Author.jsx";
import Header from './header.js';
// import { BrowserRouter as Router } from 'react-router-dom';
import UserPage from './component/userPage/userPage.js';
require('dotenv').config()

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Author />
        <List />
        <UserPage />
      </>
    );
  }
}

export default App;
