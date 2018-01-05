import React, { Component } from 'react';
import './animate.css';
import './bootstrap.min.css'
import bg from './assets/pattern.png'
import FrontSlide from './components/FrontSlide'
import Footer from './components/Footer'

const styles = {
  body: {backgroundColor: `transparent`},
  jumbo: {backgroundColor: 'transparent', marginTop: -25},
  title: {color: '#100', fontSize: 64, textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontWeight: 100},
  sub: {color: '#100', textAlign: 'center'},
}

class App extends Component {
  render() {
    return (
      <div className="App animated fadeIn" style={styles.body}>
        <div className="jumbotron" style={styles.jumbo}>
          <h1 className="display-3 animated fadeInDown" style={styles.title}>Clarion</h1>
          <h6 className="display-6 text-muted animated fadeInUp" style={styles.sub}>NEW HOPE - LAMBERTVILLE</h6>
            <hr className="my-4 animated fadeInRight"/>

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
