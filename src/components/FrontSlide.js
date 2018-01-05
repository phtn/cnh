import React from 'react'
import REST1 from '../assets/erREST1.png'
import POOL1 from '../assets/pool2.jpg'
const card = {
  height: '100%',
  padding: 0,
  backgroundColor: 'rgba(17,0,0, 0.5)'
}
const img = {
  // "height: 200px; width: 100%; display: block;"
  diplay: 'block',
  width: '100%',
  height: 200
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
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div>

      <div className="col-sm">
        <div className="card" style={card}>
          <div className="card-body">
          <img style={img} src={POOL1} />
          </div>
        </div>
      </div>


    </div>
  </div>
)