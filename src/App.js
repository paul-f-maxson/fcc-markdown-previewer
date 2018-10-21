import React, { Component } from 'react';

import Input from './Input';
import Display from './Display';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      rawText: '',
    };

    // Callback bindings
    this.updateRawText = this.updateRawText.bind(this);

  }

  updateRawText(e) {

    const value = e.target.value;
    this.setState({ rawText: value });

    e.preventDefault();

  }

  render() {
    return (
      <div className="App">

        <Input
          onChange={this.updateRawText}
        />

        <hr />

        <Display
          rawText={this.state.rawText}
        />

      </div>
    );
  }
}

export default App;
