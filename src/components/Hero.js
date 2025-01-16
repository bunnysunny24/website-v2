import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Hero = ({ isEventPage, isMissionPage, isvisionPage, isTeamPage, iscurriculumPage, isexamsPage, issportsPage, extracurriPage, isclubPage, isapplynowPage, isfeestructPage, isbecomefranchPage, isfranchinfoPage, isdisclosurePage }) => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images3.alphacoders.com/139/13985.jpg")' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* White Line after Background Image */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white z-0"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center text-white">
        {isEventPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Events Text */}
            <h1 className="text-4xl font-bold mb-2">All Events</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Events</span>
            </div>
          </div>
        ) : isMissionPage ? (  
          <div className="flex flex-col items-center space-y-2"> {/* missiomn */}
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">Our Mission</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Mission</span>
            </div>
          </div>
        ) : isvisionPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">Our vision</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">vision</span>
            </div>
          </div>
        ) : isTeamPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">principals-desk</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">principals-desk</span>
            </div>
          </div>
        ) : iscurriculumPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">Our curriculum</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">curriculum</span>
            </div>
          </div>
        ) : isexamsPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">About Exams</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">exams</span>
            </div>
          </div>
        ) : issportsPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">Sports</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">sports</span>
            </div>
          </div>
        ) : extracurriPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">Extra Curricular Activities</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Extra Curricular</span>
            </div>
          </div>
        ) : isclubPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">Clubs</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Clubs</span>
            </div>
          </div>
        ) : isapplynowPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">Admission</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Apply-now</span>
            </div>
          </div>
        ) : isfeestructPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">Fee Structure</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Fee Structure</span>
            </div>
          </div>
        ) : isbecomefranchPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">Franchise?</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Become a Franchise</span>
            </div>
          </div>
        ) : isfranchinfoPage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">About Franchise Info</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Franchise Information</span>
            </div>
          </div>
        ) : isdisclosurePage ? (
          <div className="flex flex-col items-center space-y-2">
            {/* First Line: Mission Text */}
            <h1 className="text-4xl font-bold mb-2">Disclosure</h1>
            {/* Second Line: Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/" className="flex items-center space-x-1 text-cyan-300 hover:text-white">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Disclosure</span>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-5xl font-bold mb-4">
              WELCOME TO
              <br />
              EINSTEIN GLOBAL SCHOOL
            </h1>
            <p className="max-w-3xl text-lg">
              EINSTEIN GLOBAL SCHOOL is well-known for its high-quality education,
              providing a co-educational school environment. The institution offers education from Nursery to VII and is affiliated with the TELANGANA STATE Board.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
