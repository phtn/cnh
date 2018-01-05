import React from 'react'
import POOL3 from '../assets/pool3.jpg'
import REST1 from '../assets/erREST_40_1.jpg'
import POOL1 from '../assets/pool2.jpg'
import LOB1 from '../assets/erLOB_40_1.jpg'
import BRK1 from '../assets/erBRK_40_1.jpg'

const styles = {
  card: {height: '100%', padding: 0, backgroundColor: 'rgba(17,0,0, 0.3)'},
  img: {diplay: 'block', width: '100%', height: 'auto'},
  col: {marginBottom: 20}
}
// REST2
export default props => (
  <div className="container">
    <div className="row">

      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
          <img style={styles.img} src={LOB1} />
        </div>
      </div>
      
      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
        <img style={styles.img} src={REST1} />
        </div>
      </div>

      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
        <img style={styles.img} src={BRK1} />

        </div>
      </div>


    </div>
  </div>
)