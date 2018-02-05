import React from 'react'

import NH1 from '../assets/erNH_40.jpg'
import PED from '../assets/peddlers.jpg'
// import LAM from '../assets/lambert.jpg'
import NH2 from '../assets/newhope.jpg'
import CRS from '../assets/crossing.jpg'

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
      <h3 className="display-4 animated fadeInDown" style={props.res}>PLACES TO VISIT</h3>
      <h6 className="display-6 text-muted animated fadeInUp" style={props.sub}>NEW HOPE &middot;  LAMBERTVILLE</h6>
    </div>
    
    <div className='row'>
    
      <div className="col-sm"  style={styles.col}>
      <h5 className="mb-1">The New Hope Bridge</h5>
          <div className="card" style={styles.card}>
          <img style={styles.img} src={NH1} alt='bridge' onClick={props.bridge}/>
          </div>
      </div>

      <div className="col-sm"  style={styles.col}>
      <h5 className="mb-1">New Hope Main St</h5>
        <div className="card" style={styles.card}>
        <img style={styles.img} src={NH2} alt='main' onClick={props.newhope}/>
        </div>
      </div>
      
      <div className="col-sm"  style={styles.col}>
      <h5 className="mb-1">PEDDLERS VILLAGE</h5>
        <div className="card" style={styles.card}>
        <img style={styles.img} src={PED} alt='' onClick={props.peddlers}/>
        </div>
      </div>

      <div className="col-sm"  style={styles.col}>
      <h5 className="mb-1">Washington Crossing</h5>
        <div className="card" style={styles.card}>
        <img style={styles.img} src={CRS} alt='' onClick={props.crossing}/>
        </div>
      </div>
    
    </div>

  </div>
)