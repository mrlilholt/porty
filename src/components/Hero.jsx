import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroVideo from '../assets/hero-video.mp4'; // example path to your video file

const roles = [
  "An Educator",
  "A Developer",
  "A Designer",
  "A Problem Solver",
  "A Maker",
  "A Researcher",
  "An Author",
  "A Scientist",
  "A Department Chair",
  "An Engineer",
  "An Innovator",
  "A Presenter",
  "A Mentor",
  "A Technologist",
  "A Visionary",
  "An Entrepreneur",
  "An Amateur Mycologist"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
  
    return () => clearInterval(intervalId);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Video Container */}
      <div className="hero-video-container">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        />
        {/* Semi-transparent overlay */}
        <div className="hero-overlay" />
      </div>
    
      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">Hi, I’m Addison</h1>
        <p className="hero-subtitle">{roles[currentRoleIndex]}</p>
        <a 
          href="#contact" 
          className="hero-cta" 
          onClick={handleContactClick}
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;