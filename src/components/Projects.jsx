import React, { useState } from "react";
import { Textfit } from "react-textfit";
import "./Projects.css";
import project1 from '../assets/project1.png'; // relative path from your component to the file
import project2 from '../assets/project2.png'; // relative path from your component to the file
import project3 from '../assets/project3.png'; // relative path from your component to the file
import project4 from '../assets/project4.png'; // relative path from your component to the file
import project5 from '../assets/project5.png'; // relative path from your component to the file
import project6 from '../assets/project6.png'; // relative path from your component to the file
import project7 from '../assets/project7.png'; // relative path from your component to the file
import project8 from '../assets/project8.jpg'; // relative path from your component to the file

const projectData = [
  {
    name: "NameDrop",
    description: "A game to allow faculty to match names to faces.",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "https://namedropgame.netlify.app/",
    screenshot: project1, 
  },
  {
    name: "Mushroom Radio",
    description: "A streaming radio app for mycologists while foraging.",
    techStack: ["Vue", "Express", "MySQL"],
    link: "https://mushroomradio.netlify.app/",
    screenshot: project2,
  },
  {
    name: "Complete Deck and Pergola Build",
    description: "Rebuilt a deck and pergola from the ground up in the summer of 2024.",
    screenshot: project8, 
  },
  {
    name: "Starboard App",
    description: "An app to rate my children like an Uber Driver",
    techStack: ["Firebase", "Firestore", "Javascript"],
    link: "https://thestarboard.netlify.app/",
    screenshot: project3,
  },
  {
    name: "DVD ROM CNC Pen Plotter Build",
    description: "Hacked two dvd rom drives to act as motor drivers to run a CNC pen plotter. Pen attachment 3D printed and connected to Servo for Z-axis movement. Gcode runs through Arduino + motor shield. Base and supports were laser engraved and cut on a bandsaw.",
    screenshot: project4,
  },
  {
    name: "Mushroom Recipe Finder",
    description: "A recipe finder for mushroom enthusiasts.",
    techStack: ["React", "Html", "Web API", "Python"],
    link: "https://mushroomrecipeapp.netlify.app/",
    screenshot: project6, 
  },
  {
    name: "3D printed Mini Commodore 64",
    description: "Hardware with Raspberry pi, mini display, and magnetic opening for easy access.",
    screenshot: project5,
  },
  {
    name: "Mushroom Growing Dashboard",
    description: "A dashboard to monitor temperature and humidity for oyster mushroom growing in my garage.",
    techStack: ["Particle Photon", "C#", "JavaScript"],
    link: "https://mushroomdash.netlify.app/",
    screenshot: project7, 
  },
  // ...
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>

      <div className="marquee">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {projectData.map((proj, i) => (
              <div
                className="marquee-item"
                key={i}
                onClick={() => setSelectedProject(proj)}
              >
                <img
                  src={proj.screenshot}
                  alt={proj.name}
                  className="project-screenshot"
                />
                <div className="hover-overlay">
                  <Textfit mode="multi" max={24} className="project-title">
                    {proj.name}
                  </Textfit>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate content for seamless looping */}
          <div className="marquee-content" aria-hidden="true">
            {projectData.map((proj, i) => (
              <div
                className="marquee-item"
                key={"dup-" + i}
                onClick={() => setSelectedProject(proj)}
              >
                <img
                  src={proj.screenshot}
                  alt={proj.name}
                  className="project-screenshot"
                />
                <div className="hover-overlay">
                  <Textfit mode="multi" max={24} className="project-title">
                    {proj.name}
                  </Textfit>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* We will render a modal if selectedProject is set */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <img
              src={selectedProject.screenshot}
              alt={selectedProject.name}
              className="modal-image"
            />
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            {selectedProject.techStack && (
              <p>
                <strong>Tech Stack:</strong> {selectedProject.techStack.join(", ")}
              </p>
            )}
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
