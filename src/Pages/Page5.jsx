import React from 'react'

function Page5() {
    return (
        <div className="relative min-h-screen bg-[#0a3b5c] overflow-hidden ">
          {/* Main heading */}
          <h1 className="text-center text-yellow-400 text-6xl md:text-7xl font-bold pt-16 pb-8 luckiest-guy-regular">
            Events and Challenges
          </h1>
    
          {/*<div className='width=[990px] height=[372px] top-[0px] left-[226px] rounded-[32px]'
          style={{
            background: "rgba(0, 0, 0, 0.4)",
          }}>

          </div>*/}
    
          {/* Central content area with purple background 
          <div className="relative mx-auto w-full max-w-5xl h-[400px] md:h-[500px] bg-[#483450] rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RoaxcCqyY8vFkcuV531tyDKvlu16Yo.png"
              alt="Racing cars collection"
              className="w-full h-full object-cover"
            />
          </div> */}
    
          {/* Decorative cars */}

          {/* Center red car */}
          <div className="w-[374.03px] h-[186.01px] absolute top-[200px] left-[400px] transform -rotate-12" style={{ transform: "rotate(20.08deg)" }} >
            <img
              src="../assets/car54.png"
              alt="Blue racing car"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Blue car bottom left */}
          <div className="w-[623.4px] h-[623.4px] absolute top-[400px] -left-20 transform -rotate-12" >
            <img
              src="../assets/car53.png"
              alt="Blue racing car"
              className="w-full h-full object-contain"
            />
          </div>
    
          {/* Orange car top right */}
          <div className="absolute top-[200px] right-0 w-[426px] h-[319.4px] transform rotate-12">
            <img
              src="../assets/car51.png"
              alt="../assets/car51.png"
              className="w-full h-full object-contain"
            />
          </div>
    
          {/* Blue car top left */}
          <div className="absolute bottom-[250px] -left-60 w-[623.4px] h-[623.4px] transform -rotate-12" style={{ transform: "rotate(20.08deg)" }}>
            <img
              src="../assets/car53.png"
              alt="Blue racing car with flames"
              className="w-full h-full object-contain"
            />
          </div>
    
          {/* Orange car bottom center */}
          <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-[348.63px] h-[261.47px]" style={{ transform: "rotate(-20.08deg)" }}>
            <img
              src="../assets/car51.png"
              alt="Orange muscle car"
              className="w-full h-full object-contain"
            />
          </div>
    
          {/* Green car bottom right */}
          <div className="absolute bottom-[30px] right-10 w-[473.87px] h-[473.87px] transform rotate-12">
            <img
              src="../assets/car52.png"
              alt="Green muscle car"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )
}

export default Page5