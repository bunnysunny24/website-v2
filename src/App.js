import React from 'react';
import Hero from './components/Hero'; 
import Header from './components/Header';
import WhyTAS from './components/WhyTAS'; 
import AdmissionSection from './components/AdmissionSection';
import Footer from './components/Footer';
import EventsGrid from './components/EventsGrid';
import PrincipalsDesk from './components/PrincipalsDesk';
import SportsSection from './components/SportsSection';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <WhyTAS/>
      <PrincipalsDesk/>
      <AdmissionSection/>
      <SportsSection/>
      <EventsGrid/>
      <Footer/>
    </div>
  );
}

export default App;
