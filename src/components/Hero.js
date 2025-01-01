import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://images3.alphacoders.com/139/13985.jpg")' }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* White Line after Background Image */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white z-0"></div>

      {/* Content */}
      <div className="relative z-0container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          WELCOME TO
          <br />
          EINSTEIN GLOBAL SCHOOL
        </h1>
        <p className="max-w-3xl text-lg">
          EINSTEIN GLOBAL SCHOOL is well-known for its high-quality education,
          providing a co-educational school environment. The
          institution offers education from Nursery to VII and is affiliated with
          the TELANGANA STATE Board.
        </p>
      </div>
    </div>
  );
};

export default Hero;
