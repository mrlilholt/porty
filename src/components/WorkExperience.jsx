import React from 'react';
import './WorkExperience.css';

const workExperienceData = [
  {
    role: "Middle School DREAM® Lab Coordinator / Computer Science & Engineering Department Chair",
    date: "2017-Present",
    organization: "Middle School DREAM Lab",
    description:
      "Implemented and crafted the Middle School DREAM® Lab curriculum. Oversaw approximately 100 6th, 7th, and 8th grade female students. As Department Chair, oversaw and developed the CS& Engineering program to include 3 new courses in the span of 2 years.",
    link: "https://www.baldwinschool.org/academics/dream-lab",
  },
  {
    role: "Environmental Engineering & Design",
    date: "2016-2017",
    organization: "Green Woods Charter School",
    description:
      "Designed and implemented an Environmental Engineering & Design curriculum. Oversaw approximately 150 7th and 8th grade students.",
    link: "https://www.greenwoodscharter.org/",
  },
  {
    role: "3-8 Science Teacher",
    date: "2011-2016",
    organization: "Green Woods Charter School",
    description: `Worked as the middle school lead science teacher and mentor teacher to new teachers in developing innovative lesson plans aligned with PA state standards and the EIC model.

Successfully piloted and implemented new textbook programs (written and published online).

Developed differentiated lesson plans to reach every student and their learning styles via technology.

Worked one-on-one with students to build action plans for improvement.

Collaborated with team teachers, administrators, and parents to support student development.`,
    link: "https://www.greenwoodscharter.org/",
  },
  {
    role: "Founder",
    date: "2007-2010",
    organization: "Lilholt Technology Solutions LLC.",
    description: `Co-founder and President leading the creation and maintenance of web-based marketing solutions for small to mid-sized companies.

Established a comprehensive business plan including target demographics, risk factors, promotion, and advertising.

Developed client relationships through networking, strategic sales, search engine marketing, and optimization.

Managed over 50 websites and doubled business in one year.`,
    link: "https://www.lilholttechnologysolutionsllc.com/",
  },
  {
    role: "Manager",
    date: "2008-2009",
    organization: "Restaurant Depot",
    description: `Perishables Manager for a retail store providing one-on-one service to wholesale food buyers.

Oversaw 60% of total store sales ($2 million per month) while managing 11 employees including 3 department managers.

Developed workflow processes to maximize efficiency and boost employee morale.`,
    link: "https://www.restaurantdepot.com/",
  },
];

const WorkExperience = () => {
  return (
    <section id="work" className="work-experience-section">
      <h2 className="section-title">WORK EXPERIENCE</h2>
      <div className="timeline">
        {workExperienceData.map((item, index) => {
          const sideClass = index % 2 === 0 ? "left" : "right";
          return (
            <div key={index} className={`timeline-item ${sideClass}`}>
              <div className="content">
                <h3 className="item-title">
                  {item.role} <span className="item-date">{item.date}</span>
                </h3>
                <p className="item-description">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="item-link"
                >
                  {item.organization}
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

export default WorkExperience;