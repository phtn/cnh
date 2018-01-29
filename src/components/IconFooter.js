import React from 'react'
import HOME from '../assets/home.svg'
import BED from '../assets/bed.svg'
import GRP from '../assets/group.svg'
import MAP from '../assets/map.svg'
const styles={
  container: {
    backgroundColor: 'rgba(0,0,0, 0.9)',
    height: 75,
    paddingTop: 15,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  },
  button: {marginRight: 5}
}


export default props => (
  <div style={styles.container}>
    <button type="button" onClick={props.home} className="btn btn-outline-secondary" style={styles.button}>
      <img src={HOME} height={20} alt='home'/>
    </button>
    <button type="button" onClick={props.rooms} className="btn btn-outline-secondary" style={styles.button}>
      <img src={BED} height={20} alt='bed'/>
    </button>
    <button type="button" onClick={props.group} className="btn btn-outline-secondary" style={styles.button}>
      <img src={GRP} height={20} alt='group'/>
    </button>
    <button type="button" onClick={props.dest} className="btn btn-outline-secondary" style={styles.button}>
      <img src={MAP} height={20} alt='map'/>
    </button>
  </div>
)
