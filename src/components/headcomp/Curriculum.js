import React, { useState } from 'react';

const curriculumData = {
  "Pre-primary": {
    description: "The pre-primary curriculum focuses on foundational skills with a play-based approach.",
    subjects: ["Language Development", "Basic Math Concepts", "Art & Craft", "Music", "Physical Activities"],
    activities: ["Storytelling", "Rhymes", "Drawing & Coloring", "Outdoor Games"],
  },
  "Class 1": {
    description: "Class 1 curriculum introduces basic concepts in various subjects to build a strong foundation.",
    subjects: ["English", "Mathematics", "Environmental Studies", "Art", "Physical Education"],
    activities: ["Phonics Practice", "Number Games", "Nature Walks", "Simple Art Projects"],
  },
  "Class 2": {
    description: "Class 2 curriculum emphasizes skill development and understanding of basic concepts.",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Art & Craft"],
    activities: ["Reading Practice", "Simple Science Experiments", "Creative Writing", "Group Projects"],
  },
  "Class 3": {
    description: "Class 3 curriculum encourages problem-solving, creativity, and teamwork.",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Computer Science"],
    activities: ["Story Writing", "Hands-on Science Activities", "Historical Role Plays"],
  },
  "Class 4": {
    description: "Class 4 curriculum introduces advanced concepts and fosters critical thinking.",
    subjects: ["English", "Mathematics", "Science", "History", "Geography", "Computer Science"],
    activities: ["Essay Writing", "Mathematical Puzzles", "Map Reading", "Coding Basics"],
  },
  "Class 5": {
    description: "Class 5 curriculum enhances analytical thinking and subject depth.",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Computer Science"],
    activities: ["Debates", "Research Projects", "Advanced Coding"],
  },
  "Class 6": {
    description: "Class 6 curriculum prepares students for higher education with specialized topics.",
    subjects: ["English", "Mathematics", "Physics", "Chemistry", "History", "Geography", "Computer Science"],
    activities: ["Model Making", "Lab Experiments", "Advanced Problem Solving"],
  },
  "Class 7": {
    description: "Class 7 curriculum focuses on subject integration and independent learning.",
    subjects: ["English", "Mathematics", "Biology", "Physics", "Chemistry", "History", "Geography", "Computer Science"],
    activities: ["Science Fairs", "Debates", "Programming Challenges", "Historical Documentaries"],
  },
};

const Curriculum = () => {
  const [selectedClass, setSelectedClass] = useState("Pre-primary");

  const handleClassClick = (className) => {
    setSelectedClass(className);
  };

  return (
    <div className="bg-cyan-500 min-h-screen py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Curriculum Overview</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Class Buttons */}
          <div className="bg-white text-cyan-500 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Classes</h2>
            <ul className="space-y-2">
              {Object.keys(curriculumData).map((className) => (
                <li key={className}>
                  <button
                    onClick={() => handleClassClick(className)}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedClass === className
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-100 text-cyan-500 hover:bg-cyan-400 hover:text-white"
                    }`}
                  >
                    {className}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum Details */}
          <div className="lg:col-span-2 bg-white text-cyan-700 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-4">{selectedClass} Curriculum</h2>
            <p className="mb-6 text-lg">{curriculumData[selectedClass].description}</p>
            <h3 className="text-2xl font-semibold mb-2">Subjects</h3>
            <ul className="list-disc list-inside mb-6">
              {curriculumData[selectedClass].subjects.map((subject, index) => (
                <li key={index} className="text-lg">{subject}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mb-2">Activities</h3>
            <ul className="list-disc list-inside">
              {curriculumData[selectedClass].activities.map((activity, index) => (
                <li key={index} className="text-lg">{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
