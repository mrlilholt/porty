import React from 'react';
import './TechStack.css';

const techStackData = [
  "React",
  "Node.js",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Git",
  "Visual Studio Code",
];

const TechStack = () => {
  return (
    <section id="tech" className="tech-stack-section">
      <h2 className="section-title">Tech Stack</h2>
      <ul className="tech-stack-list">
        {techStackData.map((tech, index) => (
          <li key={index} className="tech-stack-item">{tech}</li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;