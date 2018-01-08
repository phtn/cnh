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
    textAlign: 'center'
  }
}
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 5000,
  fade: true,
}
export default props => (
  <div style={styles.container}>
    <Slider {...settings}>
      <div><button type="button" onClick={props.click} className="btn btn-outline-secondary">reservations 215-862-5221</button></div>
      <div><button type="button" onClick={props.click} className="btn btn-outline-secondary">group reservations</button></div>
    </Slider>
  </div>
)
