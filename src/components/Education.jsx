import React from 'react';
import './Education.css';

const educationData = [
    {
        degree: "Project Based Learning Certificate",
        school:
          "University of Pennsylvania",
        description: "2019-2020",
      },
    {
    degree: "MA Environmental Education",
    school: "Arcadia University",
    description: "",
  },
  {
    degree: "BS Business Administration and Food Marketing",
    school: "Saint Joseph's University",
    description: "",
  },
  {
    degree: "State Certifications: 2010 - present",
    school:
      "State of Pennsylvania – Environmental Education (K-12) & State of Pennsylvania – General Science (7-12)",
    description: "",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">EDUCATION</h2>
      <div className="timeline">
        {educationData.map((item, index) => {
          const sideClass = index % 2 === 0 ? "left" : "right";
          return (
            <div key={index} className={`timeline-item ${sideClass}`}>
              <div className="content">
                <h3 className="item-title">{item.degree}</h3>
                {item.description && (
                  <p className="item-description">{item.description}</p>
                )}
                <a href="#" className="item-link">
                  {item.school}
                </a>
              </div>
              <div className="dot" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;