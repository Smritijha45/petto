import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-green-900">Petto</div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-green-900 text-2xl focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links for Medium & Large Screens */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-green-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-900">About Us</a>
          
          {/* Adoption Dropdown */}
          <div className="relative" ref={dropdownRef}>
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
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Rabbits</a>
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
        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Login
          </button>
          <FaUserCircle className="w-8 h-8 text-green-900 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu (Visible Only on Small Screens) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md w-full absolute top-16 left-0 py-4 px-6 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-green-900">Home</a>
          <a href="#" className="block text-gray-700 hover:text-green-900">About Us</a>
          <a href="#" className="block text-gray-700 hover:text-green-900">Adoption</a>
          <a href="#" className="block text-gray-700 hover:text-green-900">Blog</a>
          <a href="#" className="block text-gray-700 hover:text-green-900">Donation</a>
          <a href="#" className="block text-gray-700 hover:text-green-900">Contact Us</a>

          <button className="w-full bg-green-900 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
