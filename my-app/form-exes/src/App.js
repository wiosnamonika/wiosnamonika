import React, { Component } from 'react';
import './styles/App.css';
import Form from './Form';
// import AuthLogin from './AuthLogin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Login page</h1>
        </header>
        <div/>
        <Form/>
      </div>
    );
  }
}

export default App;
