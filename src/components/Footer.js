import React from 'react'
import Slider from 'react-slick'

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
    <button type="button" onClick={props.home} className="btn btn-outline-secondary" style={styles.button}>home</button>
    <button type="button" onClick={props.reserve} className="btn btn-outline-secondary" style={styles.button}>reservations</button>
    <button type="button" onClick={props.group} className="btn btn-outline-secondary" style={styles.button}>group</button>
  </div>
)
