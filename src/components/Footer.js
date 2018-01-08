import React from 'react'
const styles={
  container: {
    backgroundColor: 'rgba(0,0,0, 0.9)',
    height: 75,
    paddingTop: 15,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center'
  }
}
export default props => (
  <div style={styles.container}>
    <button type="button" onClick={props.click} className="btn btn-outline-secondary">reservations</button>
  </div>
)

// .App-header {
//   background-color: #222;
//   height: 150px;
//   line-height: 100px;
//   padding: 20px;
//   color: white;
//   position: fixed;
//   width: 100%;
//   bottom: 0;
// }