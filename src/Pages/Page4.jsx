import React from 'react'

function Page4() {
  return (
    <div
      className="w-full h-screen z-0"
      style={{
        backgroundImage: "url('/assets/Page4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ><div
    className="relative w-full h-full"
    style={{
      background: "rgba(0, 0, 0, 0.4)",
    }}
  >
        <div className='flex flex-col justify-center items-center h-[60%]'>
            <div className='font-bold text-[146.6px] text-white pt-60 leading-[100%] luckiest-guy-regular'>Build Your Garage</div>
            <div className='text-white text-[39.85px] font-bold px-20 text-center leading-[120%] mt-20 archivo-narrow-font'>Welcome to the ultimate Hot Wheels customization zone. Design your dream garage, pack it with your favorite cars, and show the world your style. Whether you're a collector, a racer, or a creator—this is your personal turf.</div>
            <div className='flex flex-row justify-between gap-40 mt-30 '>
                <img src="../assets/car41.png" alt="" />
                <img src="../assets/car42.png" alt="" />
                <img src="../assets/car43.png" alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Page4