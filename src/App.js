import React, { Component } from 'react';
import List from "./List.jsx";
import Author from "./Author.jsx";
import Header from './header.js'

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
