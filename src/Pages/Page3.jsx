import React from 'react'
import { FiArrowRight } from "react-icons/fi";

function Page3() {
  return (
    <div
      className="w-full h-screen relative flex flex-col justify-end"
      style={{
        backgroundImage: "url('/assets/Page3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Title over the car */}
      <div className="absolute top-[35%] w-full text-center px-4">
        <h1 className="text-white font-bold text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-none anton-regular">
          COLLECTORS' CORNER
        </h1>
      </div>

      {/* Subtitle below car, moved lower */}
      <div className="absolute top-[65%] w-full text-center px-4 z-10">
        <p className="text-[#EE382B] text-[18px] sm:text-[24px] md:text-[32px] lg:text-[38px] font-medium shadow-lg archivo-narrow-font">
          Where Legends Live
        </p>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center pb-12 px-4">
        <button className="flex items-center gap-2 border-2 border-red-500 text-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full hover:bg-red-600 transition-all duration-300 text-sm sm:text-lg md:text-xl archivo-narrow-font">
          Explore <FiArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Page3;