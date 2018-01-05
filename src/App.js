import React, { Component } from 'react';
// import './App.css';
import './bootstrap.min.css'
import bg from './assets/pattern.png'
import FrontSlide from './components/FrontSlide'
import Footer from './components/Footer'

const styles = {
  body: {backgroundColor: `transparent`},
  jumbo: {backgroundColor: 'transparent', marginTop: -35},
  title: {color: '#100', fontSize: 64, textAlign: 'center'},
  sub: {color: '#100', textAlign: 'center'},
}

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.body}>
        <div className="jumbotron" style={styles.jumbo}>
          <h1 className="display-3" style={styles.title}>Clarion</h1>
          <h5 className="display-5 text-muted" style={styles.sub}>NEW HOPE - LAMBERTVILLE</h5>
            <hr className="my-4"/>

              <FrontSlide/>

          </div>
        <Footer/>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
