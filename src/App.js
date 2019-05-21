import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Users from './containers/Users';

const Root = () => (
  <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
)

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Root} />
      <Route path="/users" component={Users} />
    </div>
  );
}

export default App;
