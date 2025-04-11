import React from 'react'

function Navbar() {
  return (
    <nav
      className="w-full h-24 flex items-center px-8 fixed"
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
            className="bg-[#EE382B] text-yellow-300 font-bold px-10 py-3 rounded-full text-sm hover:bg-red-700 transition duration-200"
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
            className="bg-[#EE382B] text-yellow-300 font-bold px-10 py-3 rounded-full text-sm hover:bg-red-700 transition duration-200"
          >
            {item}
          </a>
        ))}

        {/* User Icon */}
        <div className="w-8 h-8 bg-red-600 rounded-full"></div>
      </div>
    </nav>
  )
}

export default Navbar