import React from 'react';

const AdmissionSection = () => {
  return (
    <div className="bg-navy-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Banner Image */}
          <div className="bg-black rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/800/400"
              alt="School Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Admission Form */}
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Admissions Open 2025-26</h2>
            
            <form className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Mobile and City Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile No"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Academic Year and Class Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-500">
                    <option value="">—Please choose an option—</option>
                    <option value="2025-26">2025-26</option>
                  </select>
                </div>
                <div>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-cyan-500">
                    <option value="">—Please choose an option—</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">KG</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    {/* Add more class options */}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-cyan-500 text-white px-8 py-2 rounded hover:bg-cyan-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Events Section Title */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white">Events</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSection;