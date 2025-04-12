import React from 'react'

function Bestseller() {
  return (
    <div
      className="w-full h-24 sm:h-32 flex items-center justify-center px-4 sm:px-8"
      style={{
        backgroundImage: "url('/assets/Bestseller.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white font-extrabold text-4xl sm:text-6xl md:text-7xl text-center luckiest-guy-regular">
        BESTSELLERS
      </div>
    </div>
  )
}

export default Bestseller
