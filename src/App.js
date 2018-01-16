import React, { Component } from 'react'
import './animate.css'
import './bootstrap.min.css'
// import LOGO from './assets/clarion.jpg'
import FrontSlide from './components/FrontSlide'
import Reservations from './components/Reservations'
import Group from './components/Group'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import Notifications, { notify } from 'react-notify-toast'

const styles = {
  body: {backgroundColor: `transparent`, textAlign: 'center'},
  logo: {borderRadius: 100, textAlign: 'center',boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)', left: window.innerWidth/2},
  jumbo: {backgroundColor: 'transparent', marginTop: -15, textAlign: 'center'},
  title: {color: '#100', fontSize: 30, textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontWeight: 100},
  res: {color: '#100', fontSize: 30, textAlign: 'center', fontFamily: 'Roboto, sans-serif', fontWeight: 100},
  sub: {color: '#100', textAlign: 'center'},
  img: {diplay: 'block', width: '100%', height: 'auto'},
  badge: {marginRight: 10}

}
const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 5000,
  fade: false,
  initialSlide: 2
}

class App extends Component {
  
  // TOAST
  show(){
    let toastColor = { background: '#1a1a1a', text: '#eeeeee' }
    notify.show('Submit Successful!', 'custom', 5000, toastColor)
  }

  render() {
    const home =()=> this.refs.slider.slickGoTo(0)
    const reserve =()=> this.refs.slider.slickGoTo(1)
    const group =()=> this.refs.slider.slickGoTo(2)
    return (
      <div>
        <Notifications options={{zIndex: 5000}}/>
      <Slider {...settings} ref='slider'>

      <div className="animated fadeIn" style={styles.body}>

        <div className="jumbotron" style={styles.jumbo}>
          <h1 className="display-3 animated fadeInDown" style={styles.title}>Clarion INN & SUITES</h1>
          <h6 className="display-6 text-muted animated fadeInUp" style={styles.sub}>NEW HOPE &middot; LAMBERTVILLE</h6>
          <hr className="my-4 animated fadeInRight"/>
            <FrontSlide/>
          </div>
      </div>
      
      <div>
        <Reservations 
          body={styles.body} 
          jumbo={styles.jumbo} 
          res={styles.res}
          sub={styles.sub}
          img={styles.img}
          badge={styles.badge}
          />
      </div>

      <div className="animated fadeIn" style={styles.body}>
        <Group showToast={this.show}/>
      </div>
      
      </Slider>
      <Footer reserve={reserve} group={group} home={home}/>
      </div>
    )
  }
}

export default App;
