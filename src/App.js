import React, { Component } from 'react';
import MainPage from './pages/Main';

const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const myEnv = dotenv.config();
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
