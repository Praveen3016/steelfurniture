import React from 'react'

const Whatsapp = () => {
  return (
    <div className="image-container">
    <a href="https://wa.me/+919967745712">
      <img
        src="public\R.png"
        alt=""
        style={{
          width: "50px",
          position: "fixed",
          bottom: "20px",
          right: "15px",
          zIndex: "100",
        }}
        className="scaling-image"
      />
    </a>
  </div>
  )
}

export default Whatsapp
