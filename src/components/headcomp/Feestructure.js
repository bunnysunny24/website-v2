import React from "react";

const feeStructure = [
  {
    class: "Pre-Primary",
    tuitionFee: "₹15,000/year",
    activityFee: "₹5,000/year",
    examinationFee: "₹2,000/year",
    otherFees: "₹1,000/year (stationery and materials)",
  },
  {
    class: "Class 1",
    tuitionFee: "₹18,000/year",
    activityFee: "₹6,000/year",
    examinationFee: "₹2,500/year",
    otherFees: "₹1,500/year (stationery and materials)",
  },
  {
    class: "Class 2",
    tuitionFee: "₹20,000/year",
    activityFee: "₹6,500/year",
    examinationFee: "₹2,500/year",
    otherFees: "₹1,500/year (stationery and materials)",
  },
  {
    class: "Class 3",
    tuitionFee: "₹22,000/year",
    activityFee: "₹7,000/year",
    examinationFee: "₹3,000/year",
    otherFees: "₹1,500/year (stationery and materials)",
  },
  {
    class: "Class 4",
    tuitionFee: "₹24,000/year",
    activityFee: "₹7,500/year",
    examinationFee: "₹3,000/year",
    otherFees: "₹2,000/year (stationery and materials)",
  },
  {
    class: "Class 5",
    tuitionFee: "₹26,000/year",
    activityFee: "₹8,000/year",
    examinationFee: "₹3,500/year",
    otherFees: "₹2,000/year (stationery and materials)",
  },
  {
    class: "Class 6",
    tuitionFee: "₹28,000/year",
    activityFee: "₹8,500/year",
    examinationFee: "₹4,000/year",
    otherFees: "₹2,500/year (stationery and materials)",
  },
  {
    class: "Class 7",
    tuitionFee: "₹30,000/year",
    activityFee: "₹9,000/year",
    examinationFee: "₹4,000/year",
    otherFees: "₹2,500/year (stationery and materials)",
  },
];

const Feestructure = () => {
  return (
    <div className="bg-cyan-500 min-h-screen py-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Fee Structure</h1>
        <p className="text-center mb-8 text-lg">
          Our fee structure is designed to provide transparency and ensure quality education for all students. Below are the details for each class:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feeStructure.map((fee, index) => (
            <div
              key={index}
              className="bg-white text-cyan-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-center mb-4">{fee.class}</h2>
              <ul className="text-lg">
                <li className="mb-2">
                  <strong>Tuition Fee:</strong> {fee.tuitionFee}
                </li>
                <li className="mb-2">
                  <strong>Activity Fee:</strong> {fee.activityFee}
                </li>
                <li className="mb-2">
                  <strong>Examination Fee:</strong> {fee.examinationFee}
                </li>
                <li>
                  <strong>Other Fees:</strong> {fee.otherFees}
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg">
            <strong>Note:</strong> Fees are subject to change based on school policy. For detailed information or any queries, please contact the school administration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feestructure;
