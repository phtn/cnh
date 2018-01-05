import React from 'react'
import REST1 from '../assets/erREST1.png'
import REST2 from '../assets/erREST_40_1.jpg'
import POOL1 from '../assets/pool2.jpg'
const card = {
  height: '100%',
  padding: 0,
  backgroundColor: 'rgba(17,0,0, 0.3)'
}
const img = {
  // "height: 200px; width: 100%; display: block;"
  diplay: 'block',
  width: '100%',
  height: 'auto'
}
// const row = { padding: 10}
export default props => (
  <div className="container">
    <div className="row">

      <div className="col-sm">
        <div className="card" style={card}>
            <img style={img} src={REST1} />
          <div className="card-body">
          </div>

        </div>
      </div>
      
      <div className="col-sm">
        <div className="card" style={card}>
        <img style={img} src={REST2} />
        </div>
      </div>

      <div className="col-sm">
        <div className="card" style={card}>
        <img style={img} src={POOL1} />

        </div>
      </div>


    </div>
  </div>
)