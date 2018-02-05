import React, { Component } from 'react'
import './animate.css'
import './bootstrap.min.css'
// import LOGO from './assets/clarion.jpg'
import FrontSlide from './components/FrontSlide'
import Rooms from './components/Rooms'
import Restaurant from './components/Restaurant'
import Group from './components/Group'
import Dest from './components/Destination'
// import Footer from './components/Footer'
import IconFooter from './components/IconFooter'
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
  infinite: false,
  speed: 700,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 5000,
  fade: false,
  initialSlide: 0
}

class App extends Component {
  
  // TOAST
  show(){
    let toastColor = { background: '#1a1a1a', text: '#eeeeee' }
    notify.show('Submit Successful!', 'custom', 5000, toastColor)
  }
  showPeddlers(){
    let toastColor = { background: '#1a1a1a', text: '#eeeeee' }
    notify.show("Peddler's Village Distance: 2.5 mi Drive: 4 min" , 'custom', 5000, toastColor)
  }
  showBridge(){
    let toastColor = { background: '#1a1a1a', text: '#eeeeee' }
    notify.show('New Hope Bridge Distance: 2 mi Drive: 6 min' , 'custom', 5000, toastColor)
  }
  showLambert(){
    let toastColor = { background: '#1a1a1a', text: '#eeeeee' }
    notify.show('Lambertville Distance: 2.5 mi Drive: 7 min' , 'custom', 5000, toastColor)
  }
  showNewHope(){
    let toastColor = { background: '#1a1a1a', text: '#eeeeee' }
    notify.show('New Hope Main St Distance: 2 mi Drive: 6 min' , 'custom', 5000, toastColor)
  }
  showCrossing(){
    let toastColor = { background: '#1a1a1a', text: '#eeeeee' }
    notify.show('Washington Xing Distance: 4.6 mi Drive: 9 min' , 'custom', 5000, toastColor)
  }
  
  render() {
    const home =()=> this.refs.slider.slickGoTo(0)
    const rooms =()=> this.refs.slider.slickGoTo(1)
    const rest =()=> this.refs.slider.slickGoTo(2)
    const group =()=> this.refs.slider.slickGoTo(3)
    const dest =()=> this.refs.slider.slickGoTo(4)
    const events =()=> this.refs.slider.slickGoTo(6)

    

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
        <Rooms jumbo={styles.jumbo} res={styles.res} sub={styles.sub}/>
      </div>

      <div className="animated fadeIn" style={styles.body}>
        <Restaurant jumbo={styles.jumbo} res={styles.res} sub={styles.sub}/>
      </div>

      <div className="animated fadeIn" style={styles.body}>
        <Group showToast={this.show}/>
      </div>

      <div className="animated fadeIn" style={styles.body}>
        <Dest 
          bridge={this.showBridge}          
          peddlers={this.showPeddlers} 
          newhope={this.showNewHope}
          crossing={this.showCrossing}
          
          jumbo={styles.jumbo} 
          res={styles.res} 
          sub={styles.sub}/>
      </div>
      
      </Slider>
      <IconFooter 
          home={home} 
          rooms={rooms}
          rest={rest} 
          group={group}
          dest={dest}
          events={events} />    
      </div>
    )
  }
}

export default App;
