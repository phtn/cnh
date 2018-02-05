import React from 'react'
import HOME from '../assets/home.svg'
import BED from '../assets/bed.svg'
import GRP from '../assets/group.svg'
import MAP from '../assets/map.svg'
import RES from '../assets/res.svg'
const styles={
  container: {
    backgroundColor: 'rgba(0,0,0, 0.9)',
    height: 80,
    paddingTop: 15,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  button: {marginRight: 5},
  phone: {color: '#919aa1'}
}


export default props => (
  <div style={styles.container}>
    <button type="button" onClick={props.home} className="btn btn-primary" style={styles.button}>
      <img src={HOME} height={20} alt='home'/>
    </button>
    <button type="button" onClick={props.rooms} className="btn btn-primary" style={styles.button}>
      <img src={BED} height={20} alt='bed'/>
    </button>
    <button type="button" onClick={props.rest} className="btn btn-primary" style={styles.button}>
      <img src={RES} height={20} alt='bed'/>
    </button>
    <button type="button" onClick={props.group} className="btn btn-primary" style={styles.button}>
      <img src={GRP} height={20} alt='group'/>
    </button>
    <button type="button" onClick={props.dest} className="btn btn-primary" style={styles.button}>
      <img src={MAP} height={20} alt='map'/>
    </button>
    <br/>
    6426 LOWER YORK RD NEW HOPE, PA 18938 | <a href='tel:2158625221' style={styles.phone}><strong>215-862-5221</strong></a>
  </div>
)
