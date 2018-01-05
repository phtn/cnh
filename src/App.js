import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css'
import bg from './assets/pattern.png'
import FrontSlide from './components/FrontSlide'

const styles = {
  body: {backgroundColor: `transparent`, height: window.innerHeight},
  jumbo: {backgroundColor: 'transparent'},
  title: {color: '#100'}
}

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.body}>
        <div className="jumbotron" style={styles.jumbo}>
          <h1 className="display-3" style={styles.title}>Clarion</h1>
          <h5 className="display-5 text-muted">NEW HOPE - LAMBERTVILLE</h5>
            <hr className="my-4"/>

              <FrontSlide/>

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
