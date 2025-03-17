import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-green-900 text-white py-8 text-center pb-15">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Petto - Adopt. Rescue. Love.</h2>
        <p className="text-sm mt-2">Connecting loving homes with pets in need. Every adoption saves a life.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm">
          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Adopt a Pet</a></li>
              <li><a href="#" className="hover:underline">Rescue Stories</a></li>
              <li><a href="#" className="hover:underline">Volunteer</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline">Pet Care Tips</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Support Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="hover:text-gray-300"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-gray-300"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>
        
        <p className="text-xs mt-6">© 2025 Petto. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
