import React, { Component } from 'react';
import List from "./List.jsx";
import Author from "./Author.jsx";

class App extends Component {
  render() {
    return (
      <>
        <Author />
        <List />
      </>
    );
  }
}

export default App;
