import React, { useState } from 'react';

const PrincipalsDesk = () => {
  const [activeTab, setActiveTab] = useState("principal");
  
  const tabs = [
    { id: "principal", label: "From The Principal's Desk" },
    { id: "team", label: "Our Team" },
    { id: "result", label: "Result" },
    { id: "overview", label: "Overview" }
  ];

  return (
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
    </div>
  );
};

export default PrincipalsDesk;