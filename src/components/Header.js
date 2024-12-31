import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top contact bar */}
      <div className="bg-cyan-500 text-white py-2 px-4">
        <div className="container mx-auto flex justify-end items-center space-x-4">
          <div className="flex items-center">
            <Phone size={16} className="mr-2" />
            <a href="tel:+91-8859500084">+91-8859500084</a>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            <a href="mailto:theasianschool@gmail.com">theasianschool@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-transparent absolute w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/api/placeholder/60/60" 
                alt="School Logo" 
                className="h-16 w-16"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6 text-white">
              <div className="group relative">
                <button className="px-2 py-1">About</button>
              </div>
              <div className="group relative">
                <button className="px-2 py-1">Academics</button>
              </div>
              <div className="group relative">
                <button className="px-2 py-1">Beyond Academics</button>
              </div>
              <div className="group relative">
                <button className="px-2 py-1">Boarding Life</button>
              </div>
              <div className="group relative">
                <button className="px-2 py-1">Admission</button>
              </div>
              <div className="group relative">
                <button className="px-2 py-1">Pages</button>
              </div>
              <div className="group relative">
                <button className="px-2 py-1">Franchise</button>
              </div>
              <div className="group relative">
                <button className="px-2 py-1">Mandatory Disclosure</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;