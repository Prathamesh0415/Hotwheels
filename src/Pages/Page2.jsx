import React from "react";
import Bestseller from "../components/Bestseller";

function Page2() {
  return (
    <div>
      <Bestseller />

      <div
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-10"
        style={{
          backgroundImage: "url('/assets/Page2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Card 1 */}
        <div
          className="relative w-full max-w-[363px] h-[500px] bg-cover bg-center rounded-md"
          style={{ backgroundImage: "url('/assets/HotwheelsCard.png')" }}
        >
          <div className="absolute top-[220px] w-full flex justify-center">
            <img
              src="/assets/car1.png"
              className="w-[75%] max-w-[290px] h-auto object-contain"
              alt="Car 1"
            />
          </div>
          <div className="absolute bottom-6 w-full flex justify-center">
            <button
              className="bg-[#DD392F] text-[#FACD32] font-bold text-[47.14px] py-1 px-10 irish-grover-regular"
              style={{
                clipPath:
                  "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
              }}
            >
              Buy
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative w-full max-w-[484px] h-[670px] bg-cover bg-center rounded-md"
          style={{ backgroundImage: "url('/assets/HotwheelsCard.png')" }}
        >
          <div className="absolute top-[240px] w-full flex justify-center">
            <img
              src="/assets/car2.png"
              className="w-[90%] max-w-[430px] h-auto object-contain"
              alt="Car 2"
            />
          </div>
          <div className="absolute bottom-[30px] w-full flex justify-center">
            <button
              className="bg-[#DD392F] text-[#FACD32] font-bold text-[47.14px] py-1 px-10 irish-grover-regular"
              style={{
                clipPath:
                  "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
              }}
            >
              Buy
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative w-full max-w-[363px] h-[500px] bg-cover bg-center rounded-md"
          style={{ backgroundImage: "url('/assets/HotwheelsCard.png')" }}
        >
          <div className="absolute top-[180px] w-full flex justify-center">
            <img
              src="/assets/car3.png"
              className="w-[75%] max-w-[290px] h-auto object-contain"
              alt="Car 3"
            />
          </div>
          <div className="absolute bottom-6 w-full flex justify-center">
            <button
              className="bg-[#DD392F] text-[#FACD32] font-bold text-[47.14px] py-1 px-10 irish-grover-regular"
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
    </div>
  );
}

export default Page2;