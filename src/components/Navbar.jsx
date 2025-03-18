import { useState } from "react";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-green-900">Petto</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-green-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-900">About Us</a>
          
          {/* Adoption Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-700 hover:text-green-900 flex items-center space-x-1"
            >
              <span>Adoption</span>
              <FaChevronDown className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 py-2 w-40">
               <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dogs</a>
               <a href="#" className="block px-4 py-2 hover:bg-gray-100">Cats</a>
               <a href="#" className="block px-4 py-2 hover:bg-gray-100">Rabbits/</a>
               <a href="#" className="block px-4 py-2 hover:bg-gray-100">Hamsters</a>
               <a href="#" className="block px-4 py-2 hover:bg-gray-100">Others</a>
              </div>
            )}
          </div>

          <a href="#" className="text-gray-700 hover:text-green-900">Blog</a>
          <a href="#" className="text-gray-700 hover:text-green-900">Donation</a>
          <a href="#" className="text-gray-700 hover:text-green-900">Contact Us</a>
        </div>

        {/* Right Section (Login + Profile Icon) */}
        <div className="flex items-center space-x-6">
          <button className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-900">
            Login
          </button>
          <FaUserCircle className="w-8 h-8 text-green-900 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
