import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WhyTAS from './components/WhyTAS';
import AdmissionSection from './components/AdmissionSection';
import EventsGrid from './components/EventsGrid';
import PrincipalsDesk from './components/PrincipalsDesk';
import SportsSection from './components/SportsSection';
import LoginPageLayout from './components/LoginPageLayout';
import Login from './components/login';
import StudentDashboard from './components/StudentDashboard';
import AllEvents from './components/eventsection/AllEvents';
import EventDetails from './components/eventsection/EventDetails';
import Mission from './components/headcomp/Mission';
import Vision from './components/headcomp/Vision';
import Curriculum from './components/headcomp/Curriculum';
import Exams from './components/headcomp/Exams';
import Extracurricular from './components/headcomp/Extracurricular';
import Clubs from './components/headcomp/Clubs';
import FeeStructure from './components/headcomp/Feestructure';
import BecomeaFranchise from './components/headcomp/BecomeaFranchise';
import FranchiseInformation from './components/headcomp/FranchiseInformation';
import ViewDisclosure from './components/headcomp/ViewDisclosure';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Route for the home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyTAS />
              <PrincipalsDesk />
              <AdmissionSection />
              <SportsSection />
              <EventsGrid />
            </>
          }
        />

        {/* Route for the login page with a clean layout */}
        <Route
          path="/login"
          element={
            <LoginPageLayout>
              <Login />
            </LoginPageLayout>
          }
        />

        {/* Route for the student dashboard after login */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Route for viewing all events */}
        <Route
          path="/events"
          element={
            <>
              <Hero isEventPage />
              <AllEvents />
            </>
          }
        />

        {/* Route for event details */}
        <Route
          path="/event/:id"
          element={
            <>
              <Hero isEventPage />
              <EventDetails />
            </>
          }
        />

        {/* Additional routes */}
        <Route path="/mission" element={<>
              <Hero isEventPage />
              <Mission/>
            </>} />
        <Route path="/vision" element={<>
              <Hero isEventPage />
              <Vision />
            </>} />
        <Route path="/principals-desk" element={<>
              <Hero isEventPage />
              <PrincipalsDesk />
            </>} />
        <Route path="/curriculum" element={<>
              <Hero isEventPage />
              <Curriculum />
            </>} />
        <Route path="/exams" element={<>
              <Hero isEventPage />
              <Exams />
            </>} />
        <Route path="/sports" element={<>
              <Hero isEventPage />
              <SportsSection />
            </>} />
        <Route path="/extracurricular" element={<>
              <Hero isEventPage />
              <Extracurricular />
            </>} />
        <Route path="/clubs" element={<>
              <Hero isEventPage />
              <Clubs />
            </>} />
        <Route path="/apply-now" element={<>
              <Hero isEventPage />
              <AdmissionSection />
            </>} />
        <Route path="/fee-structure" element={<>
              <Hero isEventPage />
              <FeeStructure />
            </>} />
        <Route path="/become-franchise" element={<>
              <Hero isEventPage />
              <BecomeaFranchise />
            </>} />
        <Route path="/franchise-info" element={<>
              <Hero isEventPage />
              <FranchiseInformation />
            </>} />
        <Route path="/view-disclosure" element={<>
              <Hero isEventPage />
              <ViewDisclosure />
            </>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
