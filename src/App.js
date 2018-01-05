import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
const button = {border: '#eee !important'}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button type="button"  className="btn btn-primary btn-outline-success" >BOOK NOW</button>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
