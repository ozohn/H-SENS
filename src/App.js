import React, { Component } from 'react';
import MainPage from './pages/Main.jsx';
var dotenv = require('dotenv');
var dotenvExpand = require('dotenv-expand');

var myEnv = dotenv.config()
dotenvExpand(myEnv);

class App extends Component {
  render() {
    return (
      <>
        <MainPage />
      </>
    );
  }
}

export default App;
