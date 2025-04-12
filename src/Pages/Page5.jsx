import React from 'react'

function Page5() {
  return (
    <div className="relative min-h-screen bg-[#0a3b5c] overflow-hidden">
      {/* Main heading */}
      <h1 className="text-center text-yellow-400 text-4xl sm:text-6xl md:text-7xl font-bold pt-16 pb-8 luckiest-guy-regular">
        Events and Challenges
      </h1>

      {/* Center red car - always visible */}
      <div className="w-60 sm:w-[374.03px] h-28 sm:h-[186.01px] absolute top-[220px] sm:top-[200px] left-1/2 transform -translate-x-1/2 rotate-[20.08deg]">
        <img
          src="../assets/car54.png"
          alt="Red racing car"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Orange car bottom center - always visible */}
      <div className="absolute bottom-[60px] sm:bottom-10 left-1/2 transform -translate-x-1/2 w-60 sm:w-[348.63px] h-40 sm:h-[261.47px] rotate-[-20.08deg]">
        <img
          src="../assets/car51.png"
          alt="Orange muscle car"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Other cars - only show on larger screens */}
      {/* Blue car bottom left */}
      <div className="hidden sm:block w-[623.4px] h-[623.4px] absolute top-[400px] -left-20 transform -rotate-12">
        <img
          src="../assets/car53.png"
          alt="Blue racing car"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Orange car top right */}
      <div className="hidden sm:block absolute top-[200px] right-0 w-[426px] h-[319.4px] transform rotate-12">
        <img
          src="../assets/car51.png"
          alt="Orange racing car"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Blue car top left */}
      <div className="hidden sm:block absolute bottom-[250px] -left-60 w-[623.4px] h-[623.4px] rotate-[20.08deg]">
        <img
          src="../assets/car53.png"
          alt="Blue racing car with flames"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Green car bottom right */}
      <div className="hidden sm:block absolute bottom-[30px] right-10 w-[473.87px] h-[473.87px] transform rotate-12">
        <img
          src="../assets/car52.png"
          alt="Green muscle car"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

export default Page5
