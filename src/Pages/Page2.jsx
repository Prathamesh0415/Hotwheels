import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Bestseller from "../components/Bestseller";

function Page2() {
  const carVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.3, // 👉 delay based on index
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const cards = [
    {
      car: "/assets/car1.png",
      maxW: "max-w-[363px]",
      height: "h-[500px]",
      imgTop: "top-[220px]",
      imgMax: "max-w-[290px]",
    },
    {
      car: "/assets/car2.png",
      maxW: "max-w-[484px]",
      height: "h-[670px]",
      imgTop: "top-[240px]",
      imgMax: "max-w-[430px]",
    },
    {
      car: "/assets/car3.png",
      maxW: "max-w-[363px]",
      height: "h-[500px]",
      imgTop: "top-[180px]",
      imgMax: "max-w-[290px]",
    },
  ];

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
        {cards.map((card, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false, amount: 0.5 });

          return (
            <div
              key={index}
              className={`relative w-full ${card.maxW} ${card.height} bg-cover bg-center rounded-md`}
              style={{ backgroundImage: "url('/assets/HotwheelsCard.png')" }}
              ref={ref}
            >
              {/* 👇 Car Image with staggered + hover */}
              <motion.div
                custom={index}
                className={`absolute ${card.imgTop} w-full flex justify-center`}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
                variants={carVariants}
              >
                <motion.img
                  src={card.car}
                  className={`w-[75%] ${card.imgMax} h-auto object-contain`}
                  alt={`Car ${index + 1}`}
                  variants={carVariants}
                />
              </motion.div>

              {/* 👇 Button with glowing hover */}
              <div className="absolute bottom-6 w-full flex justify-center">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#FF5733",
                    boxShadow: "0px 0px 15px #FACD32",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#DD392F] text-[#FACD32] font-bold text-[47.14px] py-1 px-10 irish-grover-regular"
                  style={{
                    clipPath:
                      "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
                  }}
                >
                  Buy
                </motion.button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page2;
