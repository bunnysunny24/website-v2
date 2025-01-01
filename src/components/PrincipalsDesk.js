import React, { useState } from 'react';

const PrincipalsDesk = () => {
  const [activeTab, setActiveTab] = useState("principal");

  const tabs = [
    { id: "principal", label: "From The Principal's Desk" },
    { id: "team", label: "Our Team" },
    { id: "overview", label: "Overview" },
  ];

  const teamMembers = [
    { name: "Dr. John Doe", profession: "Mathematics Teacher", img: "/api/placeholder/150/200" },
    { name: "Ms. Jane Smith", profession: "Science Teacher", img: "/api/placeholder/150/200" },
    { name: "Mr. Mark Johnson", profession: "History Teacher", img: "/api/placeholder/150/200" },
    { name: "Mrs. Emily Brown", profession: "English Teacher", img: "/api/placeholder/150/200" },
    { name: "Ms. Sarah Lee", profession: "Art Teacher", img: "/api/placeholder/150/200" },
    { name: "Mr. Chris Wilson", profession: "Physical Education Teacher", img: "/api/placeholder/150/200" },
    { name: "Mrs. Olivia Davis", profession: "Music Teacher", img: "/api/placeholder/150/200" },
    { name: "Mr. Liam Taylor", profession: "Computer Science Teacher", img: "/api/placeholder/150/200" },
    { name: "Ms. Emma Moore", profession: "Biology Teacher", img: "/api/placeholder/150/200" },
    { name: "Mr. Ethan Anderson", profession: "Chemistry Teacher", img: "/api/placeholder/150/200" },
  ];

  return (
    <div className="bg-white">
      {/* White Line */}
      <div className="w-full h-0 bg-white mb-4"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 bg-cyan-500">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-white text-black"
                  : "bg-navy-900 text-white hover:bg-navy-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        {activeTab === "principal" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg">
            {/* Text Content */}
            <div className="space-y-4">
              <blockquote className="text-gray-800 leading-relaxed">
                <p className="mb-4">
                  "The quote by American psychologist Carl Rogers, 'The only person who is educated is the 
                  one who has learned how to learn ...and change', holds more relevance today than ever 
                  before. In this era of the 'new normal', educators strive to equip students with the 
                  ability to adapt and learn continuously.
                </p>
                <p className="mb-4">
                  I began my journey with the school during the unprecedented lockdown period, when 
                  traditional classroom settings were replaced by remote learning. The team at Asian School is 
                  dedicated to ensuring that education reaches students even in the confines of their homes.
                </p>
                <p className="mb-4">
                  We believe in incorporating the traditional three Rs of education – Reading, Writing, and 
                  Arithmetic – alongside ...
                </p>
                <button className="text-cyan-500 hover:text-cyan-600 font-medium">
                  Read More
                </button>
              </blockquote>
            </div>

            {/* Principal's Image */}
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Principal"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}

        {activeTab === "team" && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 bg-white p-8 rounded-lg">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-40 object-cover rounded-lg shadow-md mb-2"
                />
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.profession}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg">
            {/* School Image */}
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="School"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Overview Text */}
            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed">
                Our school is committed to providing a nurturing environment that fosters intellectual, 
                emotional, and social growth. We embrace the traditional values of education while integrating 
                modern teaching techniques to prepare students for the challenges of the 21st century. 
                Through a comprehensive curriculum, dedicated faculty, and a vibrant community, we aim to 
                cultivate lifelong learners who are compassionate, confident, and globally aware.
              </p>
              <p className="text-gray-800 leading-relaxed">
                With state-of-the-art facilities and a strong emphasis on holistic development, our school 
                encourages students to explore their passions and reach their full potential.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrincipalsDesk;
