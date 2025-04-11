import React from "react";
import Bestseller from "../components/Bestseller";

function Page2() {
  return (
    <div>
      <Bestseller />
      <div
        className="relative w-full h-screen flex items-center justify-center gap-20"
        style={{
          backgroundImage: "url('/assets/Page2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="w-[363.1px] h-[506.66px]"
          style={{
            backgroundImage: "url('/assets/HotwheelsCard.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-[350px] w-[349.54px] h-[225px]">
            <img src="../assets/car1.png"></img>
          </div>
          <button
            className="absolute top-[570px] left-[150px] bg-red-600 text-yellow-300 font-bold text-xl py-4 px-12 "
            style={{
              clipPath:
                "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
            }}
          >
            Buy
          </button>
        </div>
        <div
          className="w-[484.21px] h-[675.64px]"
          style={{
            backgroundImage: "url('/assets/HotwheelsCard.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-[280px] w-[506.67px] h-[380px]">
            <img src="../assets/car2.png"></img>
          </div>
          <button
            className="absolute top-[645px] left-[660px] bg-red-600 text-yellow-300 font-bold text-xl py-4 px-12 "
            style={{
              clipPath:
                "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
            }}
          >
            Buy
          </button>
        </div>

        <div
          className="w-[363.1px] h-[506.66px]"
          style={{
            backgroundImage: "url('/assets/HotwheelsCard.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-[300px] w-[349.54px] h-[225px]">
            <img src="../assets/car3.png"></img>
          </div>
          <button
            className="absolute top-[570px] right-[170px] bg-red-600 text-yellow-300 font-bold text-xl py-4 px-12 "
            style={{
              clipPath:
                "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page2;
