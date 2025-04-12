import React from 'react'

function Newsletter() {
  return (
    <div className="max-w-6xl mx-auto mb-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0057B8] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Title Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-white text-2xl font-bold text-center md:text-left">
            Sign up to get the latest from Mattel!
          </h3>
        </div>
        
        {/* Input Section */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:w-2/3 px-4 py-2 rounded-full sm:rounded-l-full sm:rounded-r-none mb-2 sm:mb-0 bg-white text-black"
            />
            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-full sm:rounded-l-none sm:rounded-r-full transition duration-200">
              Sign Up
            </button>
          </div>

          <p className="text-xs mt-3 text-white opacity-80 text-center md:text-left">
            By submitting my email, I confirm I want to receive emails from Mattel and other trusted Mattel brands and programs. Click to read Mattel's Terms & Conditions and Privacy Statement.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Newsletter
    