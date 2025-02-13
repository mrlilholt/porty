import React, { useState, useEffect } from "react";
import "./Navigation.css";
import logo from "../assets/lilholtMakesTransparentLogo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHomeIcon, setShowHomeIcon] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 150);
    setShowHomeIcon(scrollY > 150); // home icon appears after 150px scroll
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      if (id !== "home") {
        setIsNavVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(homeSection);
    return () => observer.unobserve(homeSection);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? "hidden-nav" : ""}`}>
      <div
        className="nav-logo"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleScrollToSection("home")}
      >
        <img src={logo} alt="Logo" className="logo-image" />

        {(isHovered || showHomeIcon) && (
          <div
            className="home-icon fade-in"
            onClick={() => handleScrollToSection("home")}
          >
            <i className="material-icons">home</i>
          </div>
        )}
      </div>

      <div className={`nav-links ${!isNavVisible ? "hidden" : ""}`}>
        <a onClick={() => handleScrollToSection("home")}>Home</a>
        <a onClick={() => handleScrollToSection("projects")}>Projects</a>
        <a onClick={() => handleScrollToSection("about")}>About</a>
        <a onClick={() => handleScrollToSection("work")}>Work Experience</a>
        <a onClick={() => handleScrollToSection("education")}>Education</a>
        <a onClick={() => handleScrollToSection("contact")}>Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
