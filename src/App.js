import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import bg from './assets/pattern.png'
const body = {background: `url(${bg})`}
const jumbo = {backgroundColor: 'transparent'}
class App extends Component {
  render() {
    return (
      <div className="App" style={body}>
        <div className="jumbotron" style={jumbo}>
          <h1 className="display-3">Clarion</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4"/>
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
          </div>
        <header className="App-header">
          <button type="button"  className="btn btn-outline-secondary" >reservations</button>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
