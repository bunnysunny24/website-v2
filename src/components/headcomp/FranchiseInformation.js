import React from "react";

const FranchiseInformation = () => {
  return (
    <div className="bg-white min-h-screen py-12 text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-semibold text-center text-cyan-700 mb-10">
          Franchise Information
        </h1>

        {/* Introduction */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">About Our Franchise Opportunity</h2>
          <p className="text-lg leading-relaxed">
            We offer a rewarding opportunity to become a part of our educational network. Our franchise program
            provides you with the support and resources needed to build a successful educational institution,
            all while contributing to the growth of quality education across the region. With a rich history and
            a reputation for excellence, we welcome passionate individuals who are eager to make a difference in
            the education sector.
          </p>
        </section>

        {/* Franchise Criteria */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Franchise Criteria</h2>
          <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed">
            <li>
              <strong>Investment Capacity:</strong> Minimum investment of ₹10 Lakhs is required. This includes
              infrastructure setup, marketing, and operational expenses.
            </li>
            <li>
              <strong>Location:</strong> The franchise should be located in a prime location accessible to a large
              number of students and parents.
            </li>
            <li>
              <strong>Infrastructure:</strong> The franchisee must ensure that the center is equipped with adequate
              classrooms, furniture, and facilities as per the brand standards.
            </li>
            <li>
              <strong>Experience in Education:</strong> Prior experience in managing educational institutions or
              schools is preferred but not mandatory.
            </li>
            <li>
              <strong>Commitment:</strong> The franchisee must be fully committed to following the established
              curriculum, values, and operational guidelines of our institution.
            </li>
            <li>
              <strong>Staffing:</strong> Franchisees must hire qualified staff as per the requirements of the
              institution's curriculum.
            </li>
          </ul>
        </section>

        {/* Rules and Regulations */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Franchise Rules & Regulations</h2>
          <p className="text-lg mb-4 leading-relaxed">
            To maintain the brand integrity and quality standards, franchisees must adhere to the following rules and
            regulations:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed">
            <li>
              <strong>Curriculum Adherence:</strong> All franchisees must strictly follow the prescribed curriculum
              and ensure it is implemented with the utmost integrity.
            </li>
            <li>
              <strong>Quality Control:</strong> Franchisees will undergo regular audits to ensure quality standards
              are met.
            </li>
            <li>
              <strong>Branding Guidelines:</strong> Franchisees must use the official branding materials and follow
              the branding guidelines provided.
            </li>
            <li>
              <strong>Reporting:</strong> Franchisees must submit regular reports on student enrollment, financial
              status, and academic performance.
            </li>
            <li>
              <strong>Staff Training:</strong> All staff members should attend mandatory training sessions organized
              by the parent institution.
            </li>
            <li>
              <strong>Uniform Compliance:</strong> Franchisees must ensure that students wear the official school
              uniform, as specified by the institution.
            </li>
          </ul>
        </section>

        {/* Benefits of Owning a Franchise */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Benefits of Owning a Franchise</h2>
          <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed">
            <li>
              <strong>Brand Recognition:</strong> Leverage the power of an established brand with a reputation for
              quality education.
            </li>
            <li>
              <strong>Comprehensive Support:</strong> Franchisees receive full support in terms of training,
              marketing, operational guidance, and more.
            </li>
            <li>
              <strong>Proven Business Model:</strong> Benefit from a tested and successful business model that
              ensures profitability.
            </li>
            <li>
              <strong>Marketing Assistance:</strong> Get access to professionally designed marketing campaigns and
              promotional materials to attract students.
            </li>
            <li>
              <strong>Networking Opportunities:</strong> Join a community of like-minded entrepreneurs with regular
              franchisee meetups and forums.
            </li>
          </ul>
        </section>

        {/* Application Process */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">How to Apply</h2>
          <p className="text-lg mb-4 leading-relaxed">
            To apply for a franchise, please follow these steps:
          </p>
          <ol className="list-decimal pl-6 space-y-4 text-lg leading-relaxed">
            <li>Fill out the franchise application form available on our website.</li>
            <li>Submit required documents, including proof of investment capacity and prior experience (if any).</li>
            <li>Attend an interview with our franchise team for further discussion.</li>
            <li>Once approved, sign the franchise agreement and begin setting up your center.</li>
          </ol>
        </section>

        {/* Contact Information */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            For more information or any questions regarding the franchise opportunity, feel free to reach out to us:
          </p>
          <ul className="list-none pl-6 space-y-4 text-lg leading-relaxed">
            <li>
              <strong>Email:</strong> einsteintheschool2017@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91-95509 48223
            </li>
            <li>
              <strong>Address:</strong> FH28+JQG, Street No. 5,Beside Jio office, Krishna Nagar, Moula Ali, Secunderabad, Telangana 500040Our School, Education City, Hyderabad, Telangana
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FranchiseInformation;
