import React from 'react'
import { FiArrowRight } from "react-icons/fi";

function Page3() {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: "url('/assets/Page3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className='flex flex-col gap-20 justify-center items-center h-[85%]'>
        <div className="text-white font-bold text-[110.65px]">
            COLLECTORS' CORNER
        </div>
        <div className=" text-[37.69px] font-normal text-[#EE382B]">
            Where Legends Live
        </div>
        </div>
        <div className='flex justify-center'>
            <button className="mt-8 flex items-center gap-2 border-2 border-red-500 text-white px-10 py-3 rounded-full hover:bg-red-600 transition-all duration-300 text-2xl">
                Explore <FiArrowRight />
            </button>
        </div>
    </div>
  )
}

export default Page3
