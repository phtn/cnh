import React from 'react'
import POOL3 from '../assets/pool3.jpg'
import REST2 from '../assets/erREST_40_1.jpg'
import POOL1 from '../assets/pool2.jpg'
const styles = {
  card: {height: '100%', padding: 0, backgroundColor: 'rgba(17,0,0, 0.3)'},
  img: {diplay: 'block', width: '100%', height: 'auto'},
  col: {marginBottom: 20}
}

export default props => (
  <div className="container">
    <div className="row">

      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
            <img style={styles.img} src={POOL3} />
          <div className="card-body">
          </div>

        </div>
      </div>
      
      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
        <img style={styles.img} src={REST2} />
        </div>
      </div>

      <div className="col-sm"  style={styles.col}>
        <div className="card" style={styles.card}>
        <img style={styles.img} src={POOL1} />

        </div>
      </div>


    </div>
  </div>
)