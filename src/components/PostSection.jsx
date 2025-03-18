import React from 'react';
import dog3 from '../assets/dog3.jpg'; 

const PostSection = () => {
  return (
    <div className="bg-[#FFF6D9] p-6 md:px-12 rounded-lg pt-20 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 pb-20">
      {/* Left Side - Image */}
     <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
               <img src={dog3} alt="Donate" className="w-full max-w-md rounded-lg shadow-lg" />
             </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 pt-10 ">
        <h1 className="text-4xl font-bold text-green-900">Join our loving pet<br />Community</h1>
        <p className="mt-3 text-gray-800">You can join our pet loving community by going to the blog page. You can write a post about your pet adoption journey or the story behind your pet. You can share and gain tips about pet care there too.</p>

        {/* Post Now Button */}
        <button className="mt-4 bg-[#FFDAB9] text-green-700 px-5 py-2 rounded-lg text-base font-semibold shadow-md hover:bg-[#FFC4A3] transition">
          Post Now
        </button>
      </div>
    </div>
  );
};

export default PostSection;
