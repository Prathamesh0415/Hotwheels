import React from 'react';
import { FiArrowRight } from "react-icons/fi";

function Page3() {
  return (
    <div
      className="w-full h-screen relative"
      style={{
        backgroundImage: "url('/assets/Page3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Heading: Centered to Car, Single Line */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center px-4">
        <div className="text-white font-bold text-[10vw] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[110px] whitespace-nowrap leading-none anton-regular">
          COLLECTORS' CORNER
        </div>
      </div>

      {/* Subtitle: Positioned around car shadow */}
      <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-[#EE382B] text-[4vw] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[37.69px] font-normal archivo-narrow-font">
          Where Legends Live
        </div>
      </div>

      {/* Button: Near Bottom */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <button className="flex items-center gap-2 border-2 border-red-500 text-white px-6 py-2 sm:px-8 sm:py-2.5 md:px-10 md:py-3 rounded-full hover:bg-red-600 transition-all duration-300 text-[4vw] sm:text-lg md:text-xl lg:text-2xl archivo-narrow-font">
          Explore <FiArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Page3;
