import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Page1 = () => {
  return (
    <div
      className="w-full h-screen"
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
      <div className="absolute top-35 right-10">
        <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wider">
          UNLEASH THE SPEED
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white pl-85">
          Dive into the world of ultimate die-cast performance
        </p>
        <div className="pl-150">
        <button className="mt-8 flex items-center gap-2 border-2 border-red-500 text-white px-10 py-3 rounded-full hover:bg-red-600 transition-all duration-300 text-2xl">
          Explore <FiArrowRight />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;