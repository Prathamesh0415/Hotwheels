import React from 'react'

function HotWheelsCard() {
  return (
    <div
    className="w-[300px] h-[400px] bg-no-repeat bg-cover"
  style={{
    backgroundImage: "url('/assets/HotwheelsCard.png')",
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)", // Custom shape
  }}    >

    </div>
  )
}

export default HotWheelsCard