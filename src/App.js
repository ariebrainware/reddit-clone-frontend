import React, { Component } from 'react';
import './App.css';

import Header from './component/Header';
import List from './component/List';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header"> <Header>Reddit Clone</Header> </div>
        <List />
      </div>
    );
  }
}

export default App;
