import React from 'react'
import body1 from "../assets/body1.jpg";

const Body1 = () => {
  return (
    
      <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6"
      style={{ backgroundImage: `url(${body1})` }}
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-green-900 drop-shadow-lg">
        Find Your Forever Bestfriend!
      </h1>

      {/* Subtitle */}
      <p className=" text-gray-900 md:text-xl mt-3 drop-shadow-md">
        A pet is only thing in this earth that loves you more than yourself. Get yourself a life-long <br /> companion now. Don't shop Adopt!
      </p>
       {/* Adopt Now Button */}
       <button className="mt-6 bg-[#FFDAB9] text-green-900 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#FFC4A3] transition">
        Adopt Now
      </button>
   </div>
  )
}

export default Body1
