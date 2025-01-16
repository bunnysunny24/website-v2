import React from 'react';

const Mission = () => {
  return (
    <div className="bg-cyan-600 min-h-screen flex flex-col items-center justify-center py-10 px-5">
      <div className="max-w-4xl text-center p-6 bg-white rounded-lg shadow-xl">h
        <h1 className="text-5xl font-bold text-gray-800 mb-8">
          Our Mission
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          At EGS, we are dedicated to providing a nurturing environment where students can grow, learn, and excel. Our mission is to equip students with the skills and knowledge they need to thrive in an ever-evolving world.
        </p>

        <div className="flex justify-center gap-8 mb-8">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Mission Image 1" 
            className="rounded-lg shadow-lg w-72 transition-transform duration-300 transform hover:scale-105"
          />
          <img 
            src="https://via.placeholder.com/300" 
            alt="Mission Image 2" 
            className="rounded-lg shadow-lg w-72 transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Aim
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We aim to provide more than just academic excellence; we focus on empowering students with the essential life skills that will help them succeed. Creativity, collaboration, and critical thinking are at the heart of our educational approach.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          What We Do
        </h3>
        <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
          <li>Provide a holistic, well-rounded education</li>
          <li>Foster creativity, critical thinking, and problem-solving skills</li>
          <li>Encourage community involvement and global citizenship</li>
          <li>Develop leadership, teamwork, and communication abilities</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Join Us in Our Mission
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          We invite you to be a part of this exciting journey. Together, we can shape a brighter future for all our children.
        </p>
      </div>
    </div>
  );
};

export default Mission;
