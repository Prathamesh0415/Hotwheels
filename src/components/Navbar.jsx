import React, { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinksLeft = ["Home", "Collection", "Events"];
  const navLinksRight = ["Sign in", "Cart", "Wishlist"];

  return (
    <nav
      className="w-full h-24 flex items-center px-8 irish-grover-regular font-normal relative z-50"
      style={{
        backgroundImage: "url('/assets/Navbar.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden absolute top-6 left-6 z-50 text-[#FFDE00] text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-1 justify-evenly items-center">
        {navLinksLeft.map((item, index) => (
          <a
            key={index}
            href="#"
            className="bg-[#EE382B] text-[#FFDE00] font-bold px-10 py-3 rounded-full hover:bg-red-700 transition duration-200 text-2xl"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Logo */}
      <div className="mx-4">
        <img src="/assets/logo.png" alt="Hot Wheels" className="h-14" />
      </div>

      {/* Desktop Right Menu */}
      <div className="hidden lg:flex flex-1 justify-evenly items-center">
        {navLinksRight.map((item, index) => (
          <a
            key={index}
            href="#"
            className="bg-[#EE382B] text-[#FFDE00] font-bold px-10 py-3 rounded-full hover:bg-red-700 transition duration-200 text-2xl"
          >
            {item}
          </a>
        ))}
        {/* User Icon */}
        <FaUser className="text-[#FFDE00] bg-[#EE382B] rounded-full p-2 text-4xl" />
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#EE382B] flex flex-col items-center py-4 gap-4 lg:hidden">
          {[...navLinksLeft, ...navLinksRight].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-[#FFDE00] font-bold px-6 py-2 text-xl hover:underline"
            >
              {item}
            </a>
          ))}
          <FaUser className="text-[#FFDE00] text-3xl" />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
