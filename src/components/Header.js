import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ title, links }) => {
  return (
    <div className="group relative">
      <button className="px-4 py-1 text-lg relative group-hover:text-cyan-300">
        {title}
        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </button>
      <div className="absolute bg-white text-black p-2 rounded shadow-md mt-1 w-48 z-50 hidden group-hover:block">
        {links.map((link, index) => (
          <a href={link.href} className="block py-1 px-2 hover:bg-gray-100" key={index}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const handleLoginSignupClick = () => {
    window.open('/login', '_blank'); // Opens the login page in a new tab
  };

  return (
    <header className="w-full relative z-20">
      {/* Top contact bar */}
      <div className="bg-cyan-500 text-white py-2 px-4 z-0 relative">
        <div className="container mx-auto flex justify-end items-center space-x-4">
          <div className="flex items-center">
            <Phone size={16} className="mr-2" />
            <a href="tel:+91-9550948223">+91-95509 48223</a>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            <a href="mailto:einsteintheschool2017@gmail.com">einsteintheschool2017@gmail.com</a>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLoginSignupClick}
          >
            <FaSignInAlt size={16} className="mr-2" />
            <span>Login/Signup</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-transparent absolute w-full z-0">
        <div className="container mx-auto px-2 relative">
          <div className="flex justify-between items-center py-2">
            {/* Left Navigation Links */}
            <div className="flex items-center space-x-14 text-white">
              <DropdownMenu
                title="About"
                links={[
                  { href: '#mission', text: 'Mission' },
                  { href: '#vision', text: 'Vision' },
                  { href: '#team', text: 'Our Team' },
                ]}
              />
              <DropdownMenu
                title="Academics"
                links={[
                  { href: '#curriculum', text: 'Curriculum' },
                  { href: '#programs', text: 'Programs' },
                  { href: '#exams', text: 'Exams' },
                ]}
              />
              <DropdownMenu
                title="Beyond Academics"
                links={[
                  { href: '#sports', text: 'Sports' },
                  { href: '#extracurricular', text: 'Extracurricular' },
                  { href: '#clubs', text: 'Clubs' },
                ]}
              />
            </div>

            {/* Center Logo */}
            <div className="flex items-center mx-2">
              <Link to="/">
                <img
                  src="https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png"
                  alt="School Logo"
                  className="h-25 w-25 object-contain"
                  style={{ maxHeight: '120px', maxWidth: '120px' }}
                />
              </Link>
            </div>

            {/* Right Navigation Links */}
            <div className="flex items-center space-x-8 text-white">
              <DropdownMenu
                title="Admission"
                links={[
                  { href: '#apply', text: 'Apply Now' },
                  { href: '#fees', text: 'Fee Structure' },
                ]}
              />
              <DropdownMenu
                title="Franchise"
                links={[
                  { href: '#become-franchise', text: 'Become a Franchise' },
                  { href: '#franchise-info', text: 'Franchise Information' },
                ]}
              />
              <DropdownMenu
                title="Mandatory Disclosure"
                links={[
                  { href: '#disclosure', text: 'View Disclosure' },
                ]}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
