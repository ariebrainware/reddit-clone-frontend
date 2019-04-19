import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Header from './component/Header';
import ListPage from './pages/ListPage'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header"> <Header>Reddit Clone</Header> </div>
        <Container>
          <ListPage />
        </Container>
      </div>
    );
  }
}

export default App;
