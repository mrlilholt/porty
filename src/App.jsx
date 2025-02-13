import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Work from './components/WorkExperience';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <div className="container">

    <>
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Timeline />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </>
    </div>
  );
}

export default App;
