import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-text">
        <p>
    I’m Addison—a passionate <strong>Educator</strong>, <strong>Developer</strong>, <strong>Designer</strong>, and <strong>Engineer</strong> dedicated to building engaging digital experiences and inspiring the next generation of creators. My work bridges the gap between technology and creativity, blending hands-on projects with cutting-edge development tools to turn ideas into reality.
  </p>

  <h3>🌟 Projects I’ve Enjoyed Creating:</h3>
  <ul>
    <li>🔬 <strong>Aqua Innovators:</strong> A summer program where middle school students build underwater ROVs to tackle real-world environmental challenges.</li>
    <li>🧠 <strong>Unmasking Bias in AI:</strong> A hands-on workshop teaching implicit bias through machine learning models.</li>
    <li>🎮 <strong>Cap & Stem Challenge:</strong> A web-based game where players identify mushroom species, combining education with gamification.</li>
    <li>🌳 <strong>Mushroom Wonderland:</strong> A whimsical video game demo featuring a jumpy mushroom exploring vibrant worlds.</li>
    <li>📄 <strong>ICAIR Research Paper:</strong> <a href="https://papers.academic-conferences.org/index.php/icair/article/view/3034/2912" target="_blank" rel="noopener noreferrer">Mapping Software-Engineering Industry AI Use to Software-Engineering Curriculum: Developing the AI-USE Framework</a></li>
    <li>📱 <strong>Starboard:</strong> A family behavior-tracking app with a playful unicorn rating system, built with React and Firebase.</li>
    <li>📚 <strong>The Mini Mycologist’s Foraging Guide:</strong> A children’s book introducing young explorers to the fascinating world of fungi.</li>
  </ul>

  <h3>👨‍🏫 Classes I Teach:</h3>
  <ul>
    <li>💡 <strong>Interdisciplinary Design:</strong> Empowering students to combine art, science, and technology in hands-on projects.</li>
    <li>🤖 <strong>Computer Science:</strong> Covering topics from basic coding to advanced concepts like AI, cybersecurity, and robotics.</li>
    <li>🎨 <strong>Engineering & Makerspace Innovation:</strong> Guiding students through 3D printing, laser cutting, IoT devices, and rapid prototyping.</li>
  </ul>

  <h3>🛠️ Technical Skills:</h3>
  <p>
    <strong>Design & Fabrication:</strong> 3D Printing, Laser Cutting, Soldering, Traditional Woodworking, Fusion360, Tinkercad, AutoCAD Slicer, Unity (C#), IoT Development, Arduino, Raspberry Pi, LEGO Robotics.
  </p>
  <p>
    <strong>Software & App Development:</strong> Full Stack Development (HTML, CSS, JavaScript, React, Node.js, Vite), iOS (Swift), Android, Python, Google Firebase, Firestore, Netlify Deployment, App Prototyping.
  </p>
  <p>
    <strong>Creative Tools:</strong> Adobe Creative Suite, Microsoft Office, Alexa Skill Kit Development.
  </p>

  <blockquote className="about-quote">
    Whether I’m teaching in the classroom, building an app, or crafting a new project in the DREAM Lab, I thrive on exploring the possibilities of technology and design. Let’s connect and create something extraordinary together!
  </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
