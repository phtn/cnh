import React from 'react'

import NK1 from '../assets/eNK1.png'
import NDD1 from '../assets/erNDD2.png'
import GSK1 from '../assets/erGSK1_40.jpg'

const styles = {
  container: {
    height: window.innerHeight,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  img: {
    height: 200
  },
  col: {marginBottom: 20}
}



export default props => (
  <div style={styles.container}>

    <div className="jumbotron" style={props.jumbo}>
      <h3 className="display-4 animated fadeInDown" style={props.res}>BRAND NEW ROOMS</h3>
      <h6 className="display-6 text-muted animated fadeInUp" style={props.sub}>BOOK NOW CALL&middot;  215 &middot; 862 &middot; 5221</h6>
    </div>
    
    <div className='row'>
    
        <div className="col-sm"  style={styles.col}>
        <h5 className="mb-1">single king bed</h5>
          <div className="card" style={styles.card}>
          <img style={styles.img} src={NK1} alt=''/>
          </div>
        </div>
      
      <div className="col-sm"  style={styles.col}>
      <h5 className="mb-1">TWO DOUBLE BEDS</h5>
        <div className="card" style={styles.card}>
        <img style={styles.img} src={NDD1} alt=''/>
        </div>
      </div>

      <div className="col-sm"  style={styles.col}>
      <h5 className="mb-1">KING SUITE</h5>
        <div className="card" style={styles.card}>
        <img style={styles.img} src={GSK1} alt=''/>
        </div>
      </div>
    
    </div>

  </div>
)