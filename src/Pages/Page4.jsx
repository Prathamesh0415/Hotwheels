import React from 'react';

function Page4() {
  const cars = [
    { src: "../assets/car41.png", alt: "car 1" },
    { src: "../assets/car42.png", alt: "car 2" },
    { src: "../assets/car43.png", alt: "car 3" },
  ];

  return (
    <div
      className="w-full min-h-screen z-0"
      style={{
        backgroundImage: "url('/assets/Page4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-full h-full" style={{ background: "rgba(0, 0, 0, 0.4)" }}>
        <div className="flex flex-col justify-center items-center px-4 py-12 md:py-20">
          {/* Title */}
          <h1 className="font-bold text-[40px] sm:text-[60px] md:text-[90px] lg:text-[130px] text-white leading-tight text-center luckiest-guy-regular">
            Build Your Garage
          </h1>

          {/* Subtitle */}
          <p className="text-white text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] font-bold text-center leading-snug mt-6 md:mt-10 archivo-narrow-font max-w-5xl">
            Welcome to the ultimate Hot Wheels customization zone. Design your dream garage, pack it with your favorite cars, and show the world your style. Whether you're a collector, a racer, or a creator—this is your personal turf.
          </p>

          {/* Car Flip Cards */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 mt-12 w-full max-w-7xl">
            {cars.map((car, idx) => (
              <div
                key={idx}
                className="relative w-[120px] sm:w-[160px] md:w-[200px] lg:w-[250px] h-[120px] sm:h-[160px] md:h-[200px] lg:h-[250px] perspective"
              >
                <div className="w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180 relative">
                  {/* Front Face */}
                  <div className="absolute w-full h-full backface-hidden">
                    <img
                      src={car.src}
                      alt={car.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Back Face */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <img
                      src={car.src}
                      alt={`${car.alt} back`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flip Styles */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}

export default Page4;
