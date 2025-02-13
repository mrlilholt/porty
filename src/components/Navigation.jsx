import React, { useState, useEffect } from "react";
import "./Navigation.css";
import logo from "../assets/lilholtMakesTransparentLogo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showHomeIcon, setShowHomeIcon] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    // Close the mobile menu when a menu item is selected
    setMenuOpen(false);
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

      {/* Hamburger menu shown on mobile */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        &#9776; {/* Unicode hamburger icon */}
      </div>

      <div className={`nav-links ${!isNavVisible ? "hidden" : ""} ${menuOpen ? "active" : ""}`}>
        <a onClick={() => { handleScrollToSection("home"); handleMenuItemClick(); }}>Home</a>
        <a onClick={() => { handleScrollToSection("projects"); handleMenuItemClick(); }}>Projects</a>
        <a onClick={() => { handleScrollToSection("about"); handleMenuItemClick(); }}>About</a>
        <a onClick={() => { handleScrollToSection("work"); handleMenuItemClick(); }}>Work Experience</a>
        <a onClick={() => { handleScrollToSection("education"); handleMenuItemClick(); }}>Education</a>
        <a onClick={() => { handleScrollToSection("contact"); handleMenuItemClick(); }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
