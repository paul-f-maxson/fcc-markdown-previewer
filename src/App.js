import React, { Component } from 'react';

import Input from './Input';
import Display from './Display';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <hr />
        <Display />
      </div>
    );
  }
}

export default App;
