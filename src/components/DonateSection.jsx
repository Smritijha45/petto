import React from 'react';
import dog2 from "../assets/dog2.jpg"; 
export default function DonateSection() {
  return (
    <div className="bg-sky-50 pt-20 px-6 md:px-12 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Left Side*/}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-green-900">Help where the need is <br /> Greatest</h1>
          <p className=" text-gray-700 mt-3">These lovely creatures need your help now. Just know that you are doing the animal<br />welfare world a great service with every of donation, saving them from this cruel<br />world       </p>
          
          {/* Donate Now Button */}
          <button className="mt-6 bg-[#FFDAB9] text-green-900 px-4 py-2 rounded-lg text-base font-semibold shadow-md hover:bg-[#FFC4A3] transition">
  Donate Now
</button>

        </div>

        {/* Right Side: Image wala portion */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src={dog2} alt="Donate" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>

      </div>
    </div>
  );
}
