import React from 'react'

function Newsletter() {
  return (
    <div className="max-w-6xl mx-auto mb-8 px-30">
        <div className="bg-[#0057B8] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-white text-2xl font-bold mb-1 text-center pr-10">Sign up to get the latest from Mattel!</h3>
          </div>
          
          <div className="w-full md:w-1/2 ">
            <div className="flex flex-col md:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full md:w-3/4 px-4  rounded-l-full rounded-r-full md:rounded-r-none mb-2 md:mb-0 bg-white text-black"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full md:rounded-l-none md:rounded-r-full transition duration-200">
                Sign Up
              </button>
            </div>
            <p className="text-xs mt-2 text-white opacity-80 text-center">
            By submitting my email, I confirm I want to receive emails from Mattel and other trusted Mattel brands and programs. Click to read Mattel's Terms & Conditions and Privacy Statement
            </p>
          </div>
        </div>
      </div>
  )
}

export default Newsletter