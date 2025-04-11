import React from 'react'

function Bestseller() {
  return (
    <div
      className="w-full h-24 flex items-center justify-center px-8 "
      style={{
        backgroundImage: "url('/assets/Bestseller.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="text-white font-extrabold text-7xl">
            BESTSELLERS
        </div>
    </div>
  )
}

export default Bestseller