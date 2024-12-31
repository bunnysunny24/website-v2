import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full relative z-20">
      {/* Top contact bar */}
      <div className="bg-cyan-500 text-white py-2 px-4 z-20 relative">
        <div className="container mx-auto flex justify-end items-center space-x-4">
          <div className="flex items-center">
            <Phone size={16} className="mr-2" />
            <a href="tel:+91-8859500084">+91-95509 48223</a>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            <a href="mailto:theasianschool@gmail.com">einsteintheschool2017@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-transparent absolute w-full z-30">
        <div className="container mx-auto px-2 relative">
          <div className="flex justify-between items-center py-2">
            {/* Left Navigation Links */}
            <div className="flex items-center space-x-14 text-white">
              {/* About Dropdown */}
              <div className="group relative">
                <button className="px-12 py-1 text-lg ml-12">About</button>
                <div className="absolute bg-white text-black p-2 rounded shadow-md mt-1 ml-12 w-48 z-50 hidden group-hover:block">
                  <a href="#mission" className="block py-1 px-2">Mission</a>
                  <a href="#vision" className="block py-1 px-2">Vision</a>
                  <a href="#team" className="block py-1 px-2">Our Team</a>
                </div>
              </div>

              {/* Academics Dropdown */}
              <div className="group relative">
                <button className="px-1 py-1 text-lg -ml-12 mx-12">Academics</button>
                <div className="absolute bg-white text-black p-2 rounded shadow-md mt-1 w-48 -ml-11 z-50 hidden group-hover:block">
                  <a href="#curriculum" className="block py-1 px-2">Curriculum</a>
                  <a href="#programs" className="block py-1 px-2">Programs</a>
                  <a href="#exams" className="block py-1 px-2">Exams</a>
                </div>
              </div>

              {/* Beyond Academics Dropdown */}
              <div className="group relative">
                <button className="px-1 py-1 text-lg -ml-12 mx-2">Beyond Academics</button>
                <div className="absolute bg-white text-black p-2 rounded shadow-md mt-1 w-48 -ml-11 z-50 hidden group-hover:block">
                  <a href="#sports" className="block py-1 px-2">Sports</a>
                  <a href="#extracurricular" className="block py-1 px-2">Extracurricular</a>
                  <a href="#clubs" className="block py-1 px-2">Clubs</a>
                </div>
              </div>
            </div>

            {/* Center Logo */}
            <div className="flex items-center mx-2">
              <img
                src="https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png"
                alt="School Logo"
                className="h-25 w-25 object-contain"
                style={{ maxHeight: '120px', maxWidth: '120px' }}
              />
            </div>

            {/* Right Navigation Links */}
            <div className="flex items-center space-x-8 text-white">
              <div className="group relative">
                <button className="px-1 py-1 -mx-12 mr-12 -ml-1 text-lg">Admission</button>
                <div className="absolute bg-white text-black p-2 rounded shadow-md mt-1 w-48 z-50 hidden group-hover:block">
                  <a href="#apply" className="block py-1 px-2">Apply Now</a>
                  <a href="#fees" className="block py-1 px-2">Fee Structure</a>
                </div>
              </div>
              <div className="group relative">
                <button className="px-0 py-1 text-lg -mx-3">Franchise</button>
                <div className="absolute bg-white text-black p-2 rounded shadow-md mt-1 -ml-4 w-48 z-50 hidden group-hover:block">
                  <a href="#become-franchise" className="block py-1 px-2">Become a Franchise</a>
                  <a href="#franchise-info" className="block py-1 px-2">Franchise Information</a>
                </div>
              </div>
              <div className="group relative">
                <button className="px-12 py-1 text-lg mr-8">Mandatory Disclosure</button>
                <div className="absolute bg-white text-black p-2 rounded shadow-md mt-1 w-48 ml-12 z-50 hidden group-hover:block">
                  <a href="#disclosure" className="block py-1 px-2">View Disclosure</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
