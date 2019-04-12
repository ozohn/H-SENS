import React, { Component } from 'react';
import List from "./component/list/List.jsx";
import Author from "./component/author/Author.jsx";
import Header from './header.js';
// import { BrowserRouter as Router } from 'react-router-dom';
require('dotenv').config()

class App extends Component {
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

export default App;
