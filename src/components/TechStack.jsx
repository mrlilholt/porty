import React from 'react';
import './TechStack.css';

const techStackData = [
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Node.js", logo: "https://nodejs.org/static/images/logo.svg" },
  { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/HTML5_logo.svg" },
  { name: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
  { name: "EmailJS", logo: "https://via.placeholder.com/50?text=EmailJS" },
  { name: "Visual Studio Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
  { name: "Vite", logo: "https://raw.githubusercontent.com/vitejs/vite/main/packages/playground/public/vite.svg?sanitize=true" }
];

const TechStack = () => {
  return (
    <section id="tech" className="tech-stack-section">
      <h2 className="section-title">Tech Stack</h2>
      <ul className="tech-stack-list">
        {techStackData.map((tech, index) => (
          <li key={index} className="tech-stack-item">
            <img src={tech.logo} alt={`${tech.name} logo`} className="tech-stack-logo" />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;