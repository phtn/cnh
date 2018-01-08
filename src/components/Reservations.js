import React from 'react'
import NK1 from '../assets/eNK1.png'
import NK2 from '../assets/erNK3_40.jpg'
export default props => (
  <div className="animated fadeIn" style={props.body}>
    <div className="jumbotron" style={props.jumbo}>
      <h3 className="display-4 animated fadeInDown" style={props.res}>RESERVATIONS</h3>
        
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">single king bed</h5>
            <small>GOOD FOR 2</small>
          </div>
        </a>

        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
          <div className="d-flex w-100 justify-content-between">
          
          <div className='col-lg'>
          <div className='card'>
            <img style={props.img} src={NK1} />
          </div>
          
          <div className='card'>
            <img style={props.img} src={NK2} />
          </div>
          </div>
          </div>
        </a>

        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Amenities:</h5>
            
          </div>
          <span className="badge badge-success" style={props.badge}>High-Speed Wifi</span>
          <span className="badge badge-success" style={props.badge}>Professional Business Center</span>
          <span className="badge badge-success" style={props.badge}>Fitness Center</span>
          <span className="badge badge-success" style={props.badge}>Outdoor Pool (Seasonal)</span>
          <span className="badge badge-success" style={props.badge}>Restaurant & Bar</span>
          <span className="badge badge-success" style={props.badge}>Free Parking</span>
          <span className="badge badge-success" style={props.badge}>Refrigerator</span>
          <span className="badge badge-success" style={props.badge}>Microwave</span>
        </a>
      </div>

      </div>
  </div>
)