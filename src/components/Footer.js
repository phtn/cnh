import React from 'react'

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
    <button type="button" onClick={props.rooms} className="btn btn-outline-secondary" style={styles.button}>rooms</button>
    <button type="button" onClick={props.group} className="btn btn-outline-secondary" style={styles.button}>group</button>
    <button type="button" onClick={props.dest} className="btn btn-outline-secondary" style={styles.button}>desinations</button>
    <br/>
    test
  </div>
)
