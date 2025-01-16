import React, { useState } from "react";

const examData = {
  "Pre-primary": {
    pattern: "No formal examinations; assessments are play-based and observational.",
    rules: [
      "No strict time limits; focus is on participation and engagement.",
      "Activities like storytelling, drawing, and simple Q&A sessions.",
    ],
    duration: "20–30 minutes per activity.",
    subjects: ["Language Development", "Basic Math", "Art & Craft"],
  },
  "Class 1": {
    pattern: "Written tests in basic subjects with oral evaluations.",
    rules: [
      "Parents are encouraged to ensure the child’s punctuality.",
      "Each exam is designed to be age-appropriate and stress-free.",
    ],
    duration: "1 hour per subject.",
    subjects: ["English", "Mathematics", "Environmental Studies"],
  },
  "Class 2": {
    pattern: "Combination of written, oral, and activity-based assessments.",
    rules: [
      "No electronic devices allowed during exams.",
      "Focus is on understanding concepts rather than rote learning.",
    ],
    duration: "1.5 hours per subject.",
    subjects: ["English", "Mathematics", "Science", "Art"],
  },
  "Class 3": {
    pattern: "Periodic tests and semester exams with project submissions.",
    rules: [
      "All students must be seated 10 minutes before the exam starts.",
      "Use of textbooks or notes during exams is prohibited.",
    ],
    duration: "2 hours per subject.",
    subjects: ["English", "Mathematics", "Science", "Social Studies"],
  },
  "Class 4": {
    pattern: "Mid-term and final exams with internal assignments.",
    rules: [
      "Students must carry their own stationery.",
      "Sharing of materials during exams is not allowed.",
    ],
    duration: "2 hours 30 minutes per subject.",
    subjects: ["English", "Mathematics", "Science", "History", "Geography"],
  },
  "Class 5": {
    pattern: "Formal exams with a focus on analytical and critical thinking.",
    rules: [
      "Latecomers will not be permitted to enter the exam hall.",
      "No talking or exchanging materials during the exam.",
    ],
    duration: "2.5 hours per subject.",
    subjects: ["English", "Mathematics", "Science", "Social Studies"],
  },
  "Class 6": {
    pattern: "Descriptive and objective type questions in exams.",
    rules: [
      "Students must submit projects and assignments on time.",
      "Misconduct during exams will lead to disqualification.",
    ],
    duration: "3 hours per subject.",
    subjects: [
      "English",
      "Mathematics",
      "Physics",
      "Chemistry",
      "History",
      "Geography",
    ],
  },
  "Class 7": {
    pattern: "Board-aligned exams with comprehensive syllabus coverage.",
    rules: [
      "Identity cards are mandatory for entry into the exam hall.",
      "Strict invigilation to maintain the integrity of the exams.",
    ],
    duration: "3 hours per subject.",
    subjects: [
      "English",
      "Mathematics",
      "Biology",
      "Physics",
      "Chemistry",
      "History",
      "Geography",
    ],
  },
};

const Exam = () => {
  const [selectedClass, setSelectedClass] = useState("Pre-primary");

  const handleClassClick = (className) => {
    setSelectedClass(className);
  };

  return (
    <div className="bg-cyan-500 min-h-screen py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Exam Details</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Class Buttons */}
          <div className="bg-white text-cyan-500 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Classes</h2>
            <ul className="space-y-2">
              {Object.keys(examData).map((className) => (
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

          {/* Exam Details */}
          <div className="lg:col-span-2 bg-white text-cyan-700 rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold mb-4">
              {selectedClass} Exam Details
            </h2>
            <h3 className="text-2xl font-semibold mb-2">Exam Pattern</h3>
            <p className="mb-6 text-lg">{examData[selectedClass].pattern}</p>
            <h3 className="text-2xl font-semibold mb-2">Rules & Regulations</h3>
            <ul className="list-disc list-inside mb-6">
              {examData[selectedClass].rules.map((rule, index) => (
                <li key={index} className="text-lg">
                  {rule}
                </li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mb-2">Subjects</h3>
            <ul className="list-disc list-inside mb-6">
              {examData[selectedClass].subjects.map((subject, index) => (
                <li key={index} className="text-lg">
                  {subject}
                </li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mb-2">Exam Duration</h3>
            <p className="text-lg">{examData[selectedClass].duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
