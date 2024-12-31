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
              src="/api/placeholder/300/300"
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
                'Fee Structure',
                'Blogs',
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
                <h4 className="text-lg font-semibold mb-2">The Asian School</h4>
                <p>Asian Acres, Vasant Vihar, Indra Nagar</p>
                <p>Colony Dehradun,</p>
                <p>Uttarakhand 248006</p>
              </div>
              
              <div>
                <p className="font-semibold">For School Franchise</p>
                <p className="text-cyan-400">+91-7217056772</p>
              </div>
              
              <div>
                <p className="font-semibold">For School Enquiry</p>
                {['+91-1352761859', '+91-8859500084', '+91-7217017038'].map((phone) => (
                  <p key={phone} className="text-cyan-400">{phone}</p>
                ))}
                <p className="text-cyan-400">theasianschool@gmail.com</p>
              </div>
            </div>
          </div>

          {/* School Info Section */}
          <div className="md:col-span-1">
            <img 
              src="/api/placeholder/200/50" 
              alt="The Asian School" 
              className="mb-4 h-12"
            />
            <p className="mb-6">
              The Asian School is one of the best schools in Dehradun, India which provides co-educational day-cum-boarding school.
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
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Globe size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2024 The Asian School</p>
          <p className="flex items-center">
            Powered By <a href="#" className="text-cyan-400 ml-1">Web Glaze</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;