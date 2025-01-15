// Vision.js
import React from 'react';

const Vision = () => {
  return (
    <div className="bg-cyan-500 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">
          Our Vision
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          At our school, we envision a future where every student is empowered to become a compassionate, critical thinker capable of shaping a better tomorrow. Our vision is to foster an inclusive learning environment that encourages curiosity, promotes respect, and cultivates a love for learning.
        </p>

        <div className="bg-cyan-200 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
            The Core of Our Vision
          </h2>
          <p className="text-lg text-gray-700">
            We believe in equipping students with not just academic knowledge, but the skills needed for personal growth, social responsibility, and leadership. Our vision includes:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-lg text-gray-700">
            <li>Promoting critical thinking and problem-solving skills.</li>
            <li>Fostering a sense of empathy and social responsibility.</li>
            <li>Encouraging creativity, innovation, and teamwork.</li>
            <li>Building strong values of honesty, integrity, and respect.</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
            Our Vision in Action
          </h2>
          <p className="text-lg text-gray-700">
            Every initiative we take, every lesson we teach, and every student we mentor reflects our vision. Through diverse extracurricular activities, advanced curriculum, and dedicated faculty, we make this vision a reality for every child in our care.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl text-gray-800">
            Join us as we strive towards a brighter future, where education is the key to unlocking endless possibilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
