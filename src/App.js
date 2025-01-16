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
        {/* Home Page */}
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

        {/* Login Page */}
        <Route
          path="/login"
          element={
            <LoginPageLayout>
              <Login />
            </LoginPageLayout>
          }
        />

        {/* Student Dashboard */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Events */}
        <Route
          path="/events"
          element={
            <>
              <Hero isEventPage />
              <AllEvents />
            </>
          }
        />
        <Route
          path="/event/:id"
          element={
            <>
              <Hero isEventPage />
              <EventDetails />
            </>
          }
        />

        {/* Additional Routes */}
        <Route path="/mission" element={<><Hero isMissionPage /><Mission /></>} />
        <Route path="/vision" element={<><Hero isvisionPage /><Vision /></>} />
        <Route path="/team" element={<><Hero isTeamPage /><PrincipalsDesk /></>} />
        <Route path="/curriculum" element={<><Hero isCurriculumPage /><Curriculum /></>} />
        <Route path="/exams" element={<><Hero isEventPage /><Exams /></>} />
        <Route path="/sports" element={<><Hero isEventPage /><SportsSection /></>} />
        <Route path="/extracurricular" element={<><Hero isEventPage /><Extracurricular /></>} />
        <Route path="/clubs" element={<><Hero isEventPage /><Clubs /></>} />
        <Route path="/apply-now" element={<><Hero isApplyNowPage /><AdmissionSection /></>} />
        <Route path="/fee-structure" element={<><Hero isEventPage /><FeeStructure /></>} />
        <Route path="/become-franchise" element={<><Hero isEventPage /><BecomeaFranchise /></>} />
        <Route path="/franchise-info" element={<><Hero isEventPage /><FranchiseInformation /></>} />
        <Route path="/view-disclosure" element={<><Hero isEventPage /><ViewDisclosure /></>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
