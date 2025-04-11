import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Page1 = () => {
  return (
    <div
      className="w-full h-screen "
      style={{
        backgroundImage: "url('/assets/Page1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div
    className="absolute right-0 top-24 w-1/2 h-full"
    style={{
      background: "linear-gradient(to left, rgba(0, 102, 255, 0.4), transparent)",
    }}
  ></div>
      <div className="absolute top-35 right-11">
      <div className="relative w-fit">
  <h1 className="font-extrabold text-[#FFDE00] drop-shadow-lg tracking-wider bebas-neue-regular text-[148px]">
    UNLEASH THE SPEED
  </h1>

  <h1 className="absolute -top-1 -left-1 font-extrabold text-[#DD392F] drop-shadow-lg tracking-wider bebas-neue-regular text-[148px]">
    UNLEASH THE SPEED
  </h1>
</div>
        <p className=" text-white pl-60 nunito-sans-font text-[33px]">
          Dive into the world of ultimate die-cast performance
        </p>
        <div className="pl-200">
        <button className=" mt-8 flex items-center gap-2 border-2 border-red-500 text-white px-10 py-3 rounded-full hover:bg-red-600 transition-all duration-300 text-2xl archivo-narrow-font">
          Explore <FiArrowRight />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;