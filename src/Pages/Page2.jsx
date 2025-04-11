import React from 'react'
import Bestseller from '../components/Bestseller'
import HotWheelsCard from '../components/HotWheelsCard'




function Page2() {
  return (
    <div>
        <Bestseller />
        <div
      className="w-full h-screen"
      style={{
        backgroundImage: "url('/assets/Page2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
       <HotWheelsCard /> 
      </div>
    </div>
  )
}

export default Page2