import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useScramble } from "../hooks/useScramble"; 

const Page1 = () => {
  const scrambledText = useScramble("UNLEASH THE SPEED", 50); 

  return (
    <div
      className="w-full h-screen relative"
      style={{
        backgroundImage: "url('/assets/Page1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient - only visible on md and up */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full hidden md:block"
        style={{
          background:
            "linear-gradient(to left, rgba(0, 102, 255, 0.4), transparent)",
        }}
      ></div>

      {/* Large screen content (lg and up) */}
      <div className="absolute top-2 right-11 hidden lg:block">
        <div className="relative w-fit">
          <h1 className="font-extrabold text-[#FFDE00] drop-shadow-lg tracking-wider bebas-neue-regular text-[148px]">
            {scrambledText}
          </h1>
          <h1 className="absolute -top-1 -left-1 font-extrabold text-[#DD392F] drop-shadow-lg tracking-wider bebas-neue-regular text-[148px]">
            {scrambledText}
          </h1>
        </div>

        <p className="text-white pl-60 nunito-sans-font text-[33px]">
          Dive into the world of ultimate die-cast performance
        </p>

        <div className="pl-200">
          <button className="mt-8 flex items-center gap-2 border-2 border-red-500 text-white px-10 py-3 rounded-full hover:bg-red-600 transition-all duration-300 text-2xl archivo-narrow-font">
            Explore <FiArrowRight />
          </button>
        </div>
      </div>

      {/* Medium screen content only (md) */}
      <div className="hidden md:flex lg:hidden flex-col items-center justify-center h-full text-center px-4">
        <div className="relative w-fit">
          <h1 className="font-extrabold text-[#FFDE00] drop-shadow-lg tracking-wider bebas-neue-regular text-6xl sm:text-7xl">
            {scrambledText}
          </h1>
          <h1 className="absolute -top-1 -left-1 font-extrabold text-[#DD392F] drop-shadow-lg tracking-wider bebas-neue-regular text-6xl sm:text-7xl">
            {scrambledText}
          </h1>
        </div>

        <button className="mt-8 flex items-center gap-2 border-2 border-red-500 text-white px-10 py-3 rounded-full hover:bg-red-600 transition-all duration-300 text-xl archivo-narrow-font">
          Explore <FiArrowRight />
        </button>
      </div>

      {/* Small screen content */}
      <div className="md:hidden flex flex-col items-center justify-center h-full text-center px-4">
        <div className="relative w-fit">
          <h1 className="font-extrabold text-[#FFDE00] drop-shadow-lg tracking-wider bebas-neue-regular text-4xl sm:text-5xl">
            {scrambledText}
          </h1>
          <h1 className="absolute -top-1 -left-1 font-extrabold text-[#DD392F] drop-shadow-lg tracking-wider bebas-neue-regular text-4xl sm:text-5xl">
            {scrambledText}
          </h1>
        </div>

        <button className="mt-8 flex items-center gap-2 bg-red-600 border-2 border-red-500 text-white px-8 py-2 rounded-full hover:bg-red-700 transition-all duration-300 text-lg archivo-narrow-font">
          Explore <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Page1;
