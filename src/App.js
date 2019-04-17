import React, { Component } from 'react';
import List from "./component/list/List.jsx";
import Author from "./component/author/Author.jsx";
import Header from './header.js';
var dotenv = require('dotenv');
var dotenvExpand = require('dotenv-expand');

var myEnv = dotenv.config()
dotenvExpand(myEnv);

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
