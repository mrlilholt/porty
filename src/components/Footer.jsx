// Footer.jsx
import React, { useState } from 'react';
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TechStack from './TechStack';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      handleCloseModal();
    }
  };

  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Addison Lilholt. All rights reserved.</p>
      <div className="footer-links">
        <button onClick={handleShowModal} className="footer-link">
          Check out the Tech Stack for this site
        </button>
        <div className="social-icons">
          <a href="https://github.com/mrlilholt" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/addison-lilholt-860059214/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
            <TechStack />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
