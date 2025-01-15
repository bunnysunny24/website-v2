import React from 'react';
import { Facebook, Twitter, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Map Section */}
          <div className="md:col-span-1">
            <iframe
              src="https://www.google.com/maps/place/Einstein+little+champs+play+school/@17.4511011,78.5625647,16.14z/data=!4m16!1m7!3m6!1s0x3bcb9d29db27588f:0x60c7485a2cd3b89d!2sEinstein+little+champs+play+school!8m2!3d17.4515744!4d78.5669654!16s%2Fg%2F11rfddvv7k!3m7!1s0x3bcb9d29db27588f:0x60c7485a2cd3b89d!8m2!3d17.4515744!4d78.5669654!9m1!1b1!16s%2Fg%2F11rfddvv7k?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
              className="w-full h-64 rounded-lg"
              title="School Location"
            />
          </div>

          {/* Links Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Links</h3>
            <div className="space-y-2">
              {[
                'FAQ',
                'Calendar',
                'Notice Board',
                'Franchise',
                'E-Prospectus',
                'Registration Form',
                'Fee Structure',,
                'Privacy Policy',
                'Terms & Conditions'
              ].map((link) => (
                <div key={link} className="flex items-center space-x-2">
                  <span className="text-cyan-400">›</span>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Our Address</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">Einstein The School</h4>
                <p> FH28+JQG, Street No. 5,Beside Jio office,</p>
                <p>Krishna Nagar, Moula Ali,</p>
                <p>Secunderabad, Telangana 500040</p>
              </div>
              
              <div>
                <p className="font-semibold">For School Franchise</p>
                <p className="text-cyan-400">+91-9550948223</p>
              </div>
              
              <div>
                <p className="font-semibold">For School Enquiry</p>
                {['+91-95509 48223'].map((phone) => (
                  <p key={phone} className="text-cyan-400">{phone}</p>
                ))}
                <p className="text-cyan-400">einsteintheschool2017@gmail.com</p>
              </div>
            </div>
          </div>

          {/* School Info Section */}
          <div className="md:col-span-1">
            <img 
              src="/api/placeholder/200/50" 
              alt="Einstein Global School" 
              className="mb-4 h-12"
            />
            <p className="mb-6">
            EINSTEIN GLOBAL SCHOOL is well-known for its high-quality education,
            providing a co-educational school environment.
            </p>
            
            <div className="space-y-2">
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded transition-colors">
                Apply Now
              </button>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded transition-colors">
                Campus Tour
              </button>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.instagram.com/einstein_global_school/" className="hover:text-cyan-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Globe size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2025 Einstein Global School</p>
          <p className="flex items-center">
            Made By <a href="https://www.linkedin.com/in/bhavashesh/" className="text-cyan-400 ml-1">bunny</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;