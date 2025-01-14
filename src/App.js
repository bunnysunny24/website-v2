import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyTAS from './components/WhyTAS';
import AdmissionSection from './components/AdmissionSection';
import Footer from './components/Footer';
import EventsGrid from './components/EventsGrid';
import PrincipalsDesk from './components/PrincipalsDesk';
import SportsSection from './components/SportsSection';
import LoginPageLayout from './components/LoginPageLayout';
import Login from './components/login';
import StudentDashboard from './components/StudentDashboard';
import AllEvents from './components/eventsection/AllEvents';
import EventDetails from './components/eventsection/EventDetails';

function App() {
  return (
    <div>
      <Routes>
        {/* Route for the home page */}
        <Route
          path="/"
          element={
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

        {/* Route for viewing all events without Header */}
        <Route
          path="/events"
          element={
            <>
              <AllEvents />
              <Footer />
            </>
          }
        />

        {/* Route for event details */}
        <Route
          path="/event/:id"
          element={
            <>
              <EventDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
