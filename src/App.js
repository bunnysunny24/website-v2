import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyTAS from './components/WhyTAS';
import AdmissionSection from './components/AdmissionSection';
import Footer from './components/Footer';
import EventsGrid from './components/EventsGrid';
import PrincipalsDesk from './components/PrincipalsDesk';
import SportsSection from './components/SportsSection';
import LoginPageLayout from './components/LoginPageLayout'; // Import the new layout
import Login from './components/login';
import StudentDashboard from './components/StudentDashboard'; // Import the StudentDashboard component

function App() {
  return (
    <div>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <WhyTAS />
            <PrincipalsDesk />
            <AdmissionSection />
            <SportsSection />
            <EventsGrid />
            <Footer />
          </>
        } />

        {/* Route for the login page with a clean layout */}
        <Route path="/login" element={
          <LoginPageLayout>
            <Login /> {/* Only the login form will be shown here */}
          </LoginPageLayout>
        } />

        {/* Route for the student dashboard after login */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
