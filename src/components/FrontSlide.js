import React from 'react'
import REST1 from '../assets/erREST_40_1.jpg'
import POOL1 from '../assets/pool3.jpg'
import POOL2 from '../assets/pool2.jpg'
import LOB1 from '../assets/erLOB_40_1.jpg'
import BRK1 from '../assets/erBRK_40_1.jpg'
import LOB2 from '../assets/erLOB2.png'
import BRK2 from '../assets/erBRK1.png'
import Tagline from './Tagline'


// import Slider from 'react-slick'

const styles = {
  card: {height: '100%', padding: 0, backgroundColor: 'rgba(17,0,0, 0.3)'},
  img: {diplay: 'block', width: '100%', height: 'auto'},
  col: {marginBottom: 20},
  slide: {width: 'auto'}
}


// REST2
export default props => (
  <div className="container">
    <div className="row">

    
      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
          <img style={styles.img} src={LOB1} alt=''/>
        </div>
      </div>
      
      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
          <img style={styles.img} src={REST1} alt=''/>
        </div>
      </div>

      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
          <img style={styles.img} src={BRK1} alt=''/>
        </div>
      </div>


    </div>
    <div className="row"><Tagline/></div>
    
    <div className='row'>
      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
          <img style={styles.img} src={LOB2} alt=''/>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
          <img style={styles.img} src={POOL1} alt=''/>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
          <img style={styles.img} src={POOL2} alt=''/>
        </div>
      </div>
    </div>
    
    <div className='row'>
      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
          <img style={styles.img} src={BRK2} alt=''/>
        </div>
      </div>
    </div>

    
    

  </div>
)