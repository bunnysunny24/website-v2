import React, { useState } from "react";

const BecomeaFranchise = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    investmentRange: "",
    experience: "",
    documents: null,
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmSubmission = () => {
    setShowConfirmation(false);
    alert("Franchise application submitted successfully!");
    // Process the form data as needed, e.g., sending it to a server.
    console.log(formData);
  };

  return (
    <div className="bg-cyan-500 min-h-screen py-10 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Become a Franchise</h1>
        <p className="text-center mb-8 text-lg">
          Fill out the form below to apply for a franchise with our institution. Provide all the necessary details and attach any required documents for verification.
        </p>
        <form
          className="bg-white text-cyan-700 p-6 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            ></textarea>
          </div>

          {/* Investment Range */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="investmentRange">
              Investment Range
            </label>
            <select
              id="investmentRange"
              name="investmentRange"
              value={formData.investmentRange}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            >
              <option value="">Select an option</option>
              <option value="5-10L">₹5-10 Lakhs</option>
              <option value="10-20L">₹10-20 Lakhs</option>
              <option value="20L+">₹20 Lakhs and above</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="experience">
              Previous Experience (if any)
            </label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>

          {/* File Upload */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="documents">
              Upload Supporting Documents (PDF, Images)
            </label>
            <input
              type="file"
              id="documents"
              name="documents"
              accept=".pdf, .jpg, .jpeg, .png"
              onChange={handleFileChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition duration-300"
          >
            Submit Application
          </button>
        </form>

        {/* Confirmation Popup */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
              <h2 className="text-xl font-bold text-cyan-700">
                Confirm Submission
              </h2>
              <p>Are you sure you want to submit this application?</p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={confirmSubmission}
                  className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600"
                >
                  Yes, Submit
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BecomeaFranchise;
