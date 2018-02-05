import React from 'react'

import REST1 from '../assets/erREST2.png'
import BAR1 from '../assets/erBAR1.png'
import BAR2 from '../assets/erBAR2.png'

const styles = {
  container: {
    height: window.innerHeight,
  },
  
  card: {height: '100%', padding: 0, backgroundColor: 'rgba(17,0,0, 0.3)'},
  img: {diplay: 'block', width: '100%', height: 'auto'},
  col: {marginBottom: 20, marginLeft: 5},
  slide: {width: 'auto'}
}



export default props => (
  <div style={styles.container}>

    <div className="jumbotron" style={props.jumbo}>
      <h3 className="display-4 animated fadeInDown" style={props.res}>BONFIRE</h3>
      <h6 className="display-6 text-muted animated fadeInUp" style={props.sub}>RESTAURANT &middot;  BAR</h6>
    </div>
    
    <div className='row'>
    
    <div className="col-sm"  style={styles.col}>
      <div className="card" style={styles.card}>
        <img style={styles.img} src={REST1} alt=''/>
      </div>
    </div>
    
    <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
        <img style={styles.img} src={BAR1} alt=''/>
        </div>
    </div>

    <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
        <img style={styles.img} src={BAR2} alt=''/>
        </div>
    </div>

     
    
    </div>
    {/* <div className='row' style={{textAlign: 'center'}}>
      <div className="col-sm"  style={styles.col}>
        <h3 className="display-4 animated fadeInDown" style={props.res}>MENU</h3>
        <hr/>
      </div>
    </div>
    <div className='row'>
      <div className="col-sm"  style={styles.col}>
        
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Chicken Wings (7)</h5>
          <small>10</small>
        </div>

        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Jalopeno Poppers (6)</h5>
          <small>9</small>
        </div>

        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Onion Rings</h5>
          <small>9</small>
        </div>

        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Beef Nachos</h5>
          <small>12</small>
        </div>

        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Cheese Nachos</h5>
          <small>9</small>
        </div>

        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Hummus</h5>
          <small>9</small>
        </div>

        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Warm Bavarian Pretzel</h5>
          <small>9</small>
        </div>

        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Flatbread of the Day</h5>
          <small>12</small>
        </div>

        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">French Fries</h5>
          <small>6</small>
        </div>

        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Mozzarella Sticks</h5>
          <small>9</small>
        </div>

        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Baked Mac n' Cheese</h5>
          <small>10</small>
        </div>

        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Fried Calamari</h5>
          <small>12</small>
        </div>

      </div>
    </div> */}

  </div>
)