import React from 'react';

const SportsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-4">Sports</h2>
      <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>

      {/* Featured Cricket Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Cricket Ground Image */}
        <div className="lg:col-span-2">
          <img
            src="/api/placeholder/800/400"
            alt="Cricket Ground"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Cricket Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">CRICKET</h3>
          <div className="w-16 h-1 bg-cyan-500"></div>
          <p className="text-gray-700">
            Welcome to Asian Cricket Academy, the cricket education department of{' '}
            <span className="text-cyan-500">The Asian School</span>. We believe that cricket is not just a 
            sport, but a way of life that teaches discipline, perseverance, and teamwork. At Asian Cricket 
            Academy, we offer a comprehensive and integrated growth program that is designed to provide a 
            well-characterized and moving roadmap for our students.
          </p>
          <button className="bg-navy-900 text-white px-6 py-2 rounded hover:bg-navy-800 transition-colors">
            Read More
          </button>
        </div>
      </div>

      {/* Other Sports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Football Card */}
        <div className="relative group overflow-hidden rounded-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Football"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold mb-4">FOOTBALL</h3>
            <button className="bg-white/20 text-white backdrop-blur-sm px-4 py-2 rounded-full w-fit hover:bg-white/30 transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Basketball Card */}
        <div className="relative group overflow-hidden rounded-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Basketball"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold mb-4">BASKETBALL</h3>
            <button className="bg-white/20 text-white backdrop-blur-sm px-4 py-2 rounded-full w-fit hover:bg-white/30 transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Swimming Card */}
        <div className="relative group overflow-hidden rounded-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Swimming"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold mb-4">SWIMMING</h3>
            <button className="bg-white/20 text-white backdrop-blur-sm px-4 py-2 rounded-full w-fit hover:bg-white/30 transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Table Tennis Card */}
        <div className="relative group overflow-hidden rounded-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Table Tennis"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold mb-4">TABLE TENNIS</h3>
            <button className="bg-white/20 text-white backdrop-blur-sm px-4 py-2 rounded-full w-fit hover:bg-white/30 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsSection;