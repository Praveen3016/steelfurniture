import React from 'react'
import call from '../../public/image/call.png'
const Calllogo = () => {
  return (
    <div className="image-container">
    <a href="tel:+9967745712">
      <img
        src={call}
        alt=""
        style={{
          width: "50px",
          position: "fixed",
          bottom: "20px",
          left: "15px",
          zIndex: "100",
        }}
        className="scaling-image"
      />
    </a>
  </div>
  )
}

export default Calllogo
