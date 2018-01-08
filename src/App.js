import React, { Component } from 'react';
import './animate.css';
import './bootstrap.min.css'
import bg from './assets/pattern.png'
import FrontSlide from './components/FrontSlide'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const styles = {
  body: {backgroundColor: `transparent`, textAlign: 'center'},
  jumbo: {backgroundColor: 'transparent', marginTop: -25},
  title: {color: '#100', fontSize: 64, textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontWeight: 100},
  res: {color: '#100', fontSize: 52, textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontWeight: 100},
  sub: {color: '#100', textAlign: 'center'},
}
const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 5000,
  fade: false,
}

class App extends Component {
  componentDidMount(){
    
  }
  gotoRes(){
    // this.refs.slider.slickGoTo(2)
    console.log('test')
  }
  render() {
    const reserv =()=> this.refs.slider.slickGoTo(1)
    return (
      <div>
      <Slider {...settings} ref='slider'>

      <div className="animated fadeIn" style={styles.body}>
        <div className="jumbotron" style={styles.jumbo}>
          <h1 className="display-3 animated fadeInDown" style={styles.title}>Clarion</h1>
          <h6 className="display-6 text-muted animated fadeInUp" style={styles.sub}>NEW HOPE - LAMBERTVILLE</h6>
          <hr className="my-4 animated fadeInRight"/>
            <FrontSlide/>
          </div>
      </div>

      <div className="animated fadeIn" style={styles.body}>
        <div className="jumbotron" style={styles.jumbo}>
          <h3 className="display-4 animated fadeInDown" style={styles.res}>RESERVATIONS</h3>
          <button type="button"  className="btn btn-outline-secondary">215-862-5221</button>
          <button type="button"  className="btn btn-outline-secondary">GROUP RESERVATIONS</button>
          <hr className="my-4 animated fadeInRight"/>
            
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">single king bed</h5>
                <small>GOOD FOR 2</small>
              </div>
              
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Amenities:</h5>
                
              </div>
              <span className="badge badge-success">High-Speed Wifi</span>
              <span className="badge badge-success">Professional Business Center</span>
            </a>
          </div>

          </div>
      </div>

      </Slider>
      <Footer click={reserv}/>
      </div>
    )
  }
}

export default App;
