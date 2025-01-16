import React from 'react';

const ViewDisclosure = () => {
  return (
    <div className="bg-white min-h-screen py-12 text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-semibold text-center text-cyan-700 mb-10">
          School Disclosure & Legal Documents
        </h1>

        {/* Introduction */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">About Our School's Legal Standing</h2>
          <p className="text-lg leading-relaxed">
            Our school is committed to upholding the highest standards of education, legal compliance, and
            transparency. As part of our dedication to providing quality education, we have taken all necessary
            steps to ensure that our institution meets all the guidelines set forth by the relevant authorities
            and government bodies. Below, you will find all the documentation that verifies our compliance with
            regulations and our position as a reputable institution.
          </p>
        </section>

        {/* Government Approvals */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Government Approvals</h2>
          <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed">
            <li>
              <strong>Affiliation with Telangana State Board:</strong> Our school is affiliated with the Telangana
              State Education Board, ensuring that we follow the prescribed curriculum and adhere to government
              standards.
            </li>
            <li>
              <strong>Government Recognition:</strong> We have received recognition from the Government of Telangana
              for providing quality education, certified by the Ministry of Education.
            </li>
            <li>
              <strong>Accreditation:</strong> Our institution is accredited by national educational bodies, ensuring
              the recognition of our school across the country.
            </li>
            <li>
              <strong>Inspection Reports:</strong> The school undergoes regular inspections by government officials to
              maintain our affiliation status and meet compliance requirements.
            </li>
          </ul>
        </section>

        {/* Legal Documents */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Key Legal Documents</h2>
          <p className="text-lg mb-4 leading-relaxed">
            We believe in complete transparency and are proud to share our legal documentation with the public. These
            documents affirm the school's recognition, legal standing, and our commitment to providing the best
            educational experience:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed">
            <li>
              <strong>School Affiliation Certificate:</strong> The certificate confirming our affiliation with the
              Telangana State Education Board, valid for the current academic year.
            </li>
            <li>
              <strong>Government Sanction Letter:</strong> The official government document that grants us permission
              to operate as a recognized educational institution.
            </li>
            <li>
              <strong>Land Ownership Document:</strong> A document validating the ownership of the land and premises
              on which the school operates, confirming its legitimacy.
            </li>
            <li>
              <strong>Audit Reports:</strong> Annual audit reports from a certified auditor to ensure financial
              transparency and proper use of funds.
            </li>
            <li>
              <strong>Insurance Documentation:</strong> Proof of insurance coverage for student safety, staff,
              infrastructure, and school operations.
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Certifications & Accreditations</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Our school has received various certifications and accreditations, further proving our credibility and
            commitment to excellence:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg leading-relaxed">
            <li>
              <strong>ISO Certification:</strong> Our institution is ISO certified for maintaining high educational
              standards and quality management practices.
            </li>
            <li>
              <strong>Affiliation with International Boards:</strong> Apart from the Telangana State Board, we are in
              the process of affiliation with international educational bodies, enhancing our global reach.
            </li>
            <li>
              <strong>Recognition for Sports and Extra-curricular Activities:</strong> Our school has been awarded
              certifications for excellence in sports, music, arts, and extracurricular activities by various
              authorities.
            </li>
            <li>
              <strong>School Safety Certifications:</strong> Our campus is certified by safety and security authorities
              for providing a safe learning environment for students.
            </li>
          </ul>
        </section>

        {/* Disclosure Document Access */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Access to Disclosure Documents</h2>
          <p className="text-lg leading-relaxed">
            We encourage transparency and welcome any queries regarding the school’s documentation. You can access
            the following documents for your reference:
          </p>
          <div className="space-y-4 mt-4">
            <a
              href="#"
              className="text-cyan-700 hover:underline text-lg"
              download="School_Affiliation_Certificate.pdf"
            >
              Download School Affiliation Certificate
            </a>
            <a
              href="#"
              className="text-cyan-700 hover:underline text-lg"
              download="Government_Sanction_Letter.pdf"
            >
              Download Government Sanction Letter
            </a>
            <a
              href="#"
              className="text-cyan-700 hover:underline text-lg"
              download="Audit_Report_2023.pdf"
            >
              Download Audit Report 2023
            </a>
            <a
              href="#"
              className="text-cyan-700 hover:underline text-lg"
              download="School_Insurance_Policy.pdf"
            >
              Download Insurance Documentation
            </a>
            <a
              href="#"
              className="text-cyan-700 hover:underline text-lg"
              download="School_Safety_Certification.pdf"
            >
              Download School Safety Certification
            </a>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-600 mb-4">Contact Us for More Information</h2>
          <p className="text-lg leading-relaxed">
            If you have any further questions or need additional documentation, please feel free to get in touch with
            us:
          </p>
          <ul className="list-none pl-6 space-y-4 text-lg leading-relaxed">
            <li>
              <strong>Email:</strong> einsteintheschool2017@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91-95509 48223
            </li>
            <li>
              <strong>Address:</strong> FH28+JQG, Street No. 5,Beside Jio office, Krishna Nagar, Moula Ali, Secunderabad, Telangana 500040
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ViewDisclosure;
