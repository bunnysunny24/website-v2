import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/api/placeholder/1920/1080"
          alt="School Building"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Snowflake decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'scale(1.5)',
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          WELCOME TO
          <br />
          EINSTEIN GLOBAL SCHOOL
        </h1>
        <h2 className="text-3xl font-semibold mb-6">
          Ranked #1 Day Cum Boarding School in Dehradun, India
        </h2>
        <p className="max-w-3xl text-lg">
          EINSTEIN GLOBAL SCHOOL, Dehradun is well-known for its high-quality education,
          providing a co-educational Day cum Boarding school environment. The
          institution offers education from Nursery to XII and is affiliated with
          the CBSE Board.
        </p>
      </div>
    </div>
  );
};

export default Hero;