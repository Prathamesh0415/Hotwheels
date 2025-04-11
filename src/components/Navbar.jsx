import React from 'react'

function Navbar() {
  return (
    <nav
      className="w-full h-24 flex items-center px-8 irish-grover-regular leading-[100%] font-normal"
      style={{
        backgroundImage: "url('/assets/Navbar.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Links */}
      <div className="flex-1 flex justify-evenly items-center">
        {["Home", "Collection", "Events"].map((item, index) => (
          <a
            key={index}
            href="#"
            className="bg-[#EE382B] text-[#FFDE00] font-bold px-10 py-3 rounded-full  hover:bg-red-700 transition duration-200 text-2xl"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Center Logo */}
      <div>
        <img src="../assets/logo.png" alt="Hot Wheels" className="h-14" />
      </div>

      {/* Right Links */}
      <div className="flex-1 flex justify-evenly items-center">
        {["Sign in", "Cart", "Wishlist"].map((item, index) => (
          <a
            key={index}
            href="#"
            className="bg-[#EE382B] text-[#FFDE00] font-bold px-10 py-3 rounded-full hover:bg-red-700 transition duration-200 text-2xl"
          >
            {item}
          </a>
        ))}

        {/* User Icon */}
        <div className="w-8 h-8 bg-[#EE382B] rounded-full"></div>
      </div>
    </nav>
  )
}

export default Navbar