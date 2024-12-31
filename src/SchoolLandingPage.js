import React, { useState } from 'react';
import { Mail, Phone, ChevronDown } from 'lucide-react';

const NavMenuItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative group">
      <button 
        className="flex items-center px-3 py-2 text-white hover:text-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className="ml-1 w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
          {children}
        </div>
      )}
    </div>
  );
};

const SchoolLandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Top Contact Bar */}
      <div className="bg-cyan-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-start items-center space-x-8">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <span>+91-8859500084</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <span>theasianschool@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Content with Background Image */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"
          style={{
            backgroundImage: `url('/api/placeholder/1920/1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />

        {/* Navigation Bar - Semi-transparent */}
        <nav className="relative z-10 bg-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              {/* Left Navigation */}
              <div className="hidden md:flex space-x-4">
                <NavMenuItem title="About">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Us</a>
                </NavMenuItem>
                <NavMenuItem title="Academics">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Curriculum</a>
                </NavMenuItem>
                <NavMenuItem title="Beyond Academics">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Activities</a>
                </NavMenuItem>
                <NavMenuItem title="Boarding Life">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Campus Life</a>
                </NavMenuItem>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="/api/placeholder/60/60"
                  alt="School Logo"
                  className="h-16 w-16"
                />
              </div>

              {/* Right Navigation */}
              <div className="hidden md:flex space-x-4">
                <NavMenuItem title="Admission">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Apply Now</a>
                </NavMenuItem>
                <NavMenuItem title="Pages">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">News</a>
                </NavMenuItem>
                <NavMenuItem title="Franchise">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Information</a>
                </NavMenuItem>
                <a href="#" className="px-3 py-2 text-white hover:text-gray-200">
                  Mandatory Disclosure
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-32 px-4">
          {/* Decorative Snowflakes */}
          <div className="absolute top-10 left-10 text-white text-4xl opacity-60">❄</div>
          <div className="absolute top-20 right-20 text-white text-4xl opacity-60">❄</div>
          <div className="absolute bottom-10 left-20 text-white text-4xl opacity-60">❄</div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">WELCOME TO</h1>
            <h2 className="text-5xl md:text-6xl text-white font-bold mb-8">THE ASIAN SCHOOL</h2>
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-8">
              Ranked #1 Day Cum Boarding School in Dehradun, India
            </h3>
            <p className="max-w-3xl mx-auto text-lg text-white opacity-90 px-4 leading-relaxed">
              The Asian School, Dehradun is well-known for its high-quality education, 
              providing a co-educational Day cum Boarding school environment. 
              The institution offers education from Nursery to XII and is affiliated 
              with the CBSE Board.
            </p>
          </div>
        </div>
      </div>

      {/* Side Quick Links */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-20">
        <div className="bg-cyan-600 text-white py-3 px-6 rounded-r-lg mb-2 cursor-pointer hover:bg-cyan-700 transition-colors">
          <span className="whitespace-nowrap">Admission Enquiry</span>
        </div>
        <div className="bg-red-600 text-white py-3 px-6 rounded-r-lg cursor-pointer hover:bg-red-700 transition-colors">
          <span className="whitespace-nowrap">Virtual Tour</span>
        </div>
      </div>

      {/* Contact Floating Buttons */}
      <div className="fixed right-4 bottom-4 flex flex-col space-y-2 z-20">
        <div className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600 transition-colors">
          <img src="/api/placeholder/40/40" alt="WhatsApp" className="w-8 h-8" />
        </div>
        <div className="bg-yellow-500 p-3 rounded-full cursor-pointer hover:bg-yellow-600 transition-colors">
          <img src="/api/placeholder/40/40" alt="Location" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default SchoolLandingPage;