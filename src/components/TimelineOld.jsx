import React from 'react';
import './Timeline.css';

const timelineData = [
  // 2011
  {
    date: '2011',
    title: 'Pennsylvania Science Teachers Association Convention',
    link: 'http://www.pascience.org/Conference',
  },
  // 2012
  {
    date: '2012',
    title: 'Project Wet (Wonders of Wetlands) Certification',
    link: 'https://www.projectwet.org/',
  },
  {
    date: '2012',
    title: 'Pennsylvania Science Teachers Association Convention',
    link: 'http://www.pascience.org/Conference',
  },
  // 2013
  {
    date: '2013',
    title: 'Project Wild Certification',
    link: 'https://www.fishwildlife.org/projectwild/project-wild',
  },
  {
    date: '2013',
    title: 'Pennsylvania Science Teachers Association Convention',
    link: 'http://www.pascience.org/Conference',
  },
  // 2014
  {
    date: '2014',
    title: 'NSTA (National Science Teachers Association) National Conference in Boston',
    link: 'http://static.nsta.org/pdfs/2014NationalProgram1.pdf',
  },
  // 2015
  {
    date: '2015',
    title: 'NSTA 2015 Area Conference in Philadelphia',
    link: 'https://www.nsta.org/conferences/schedule2.aspx?id=2015phi',
  },
  // 2016
  {
    date: '2016',
    title: 'PD Visit to explore Robotics Dept. at AIM Academy',
    link: 'https://www.aimpa.org/academics/robotics-and-engineering',
  },
  // 2017
  {
    date: 'Tuesday, September 5, 2017',
    title: 'Laser Safety Certification',
    link: 'https://drive.google.com/file/d/1DURS3e3N510vH48PiPoGDXackY2JQLdd/view?usp=sharing',
  },
  {
    date: 'Wednesday, September 6, 2017',
    title: 'Hobby Series Laser Cutter Curriculum Certification',
    link: 'https://drive.google.com/file/d/16AG3-kWIXkpIspikAdAP5TI1UYtqSG9W/view?usp=sharing',
  },
  {
    date: '2017',
    title: 'Created Tool Specific Training For MS DREAM Lab',
    link: 'https://drive.google.com/file/d/1yeEyihRKNbh6C6dixUZFjGq10dCyZTm7/view?usp=sharing',
  },
  {
    date: 'Sunday, September 24, 2017',
    title: 'World Maker Faire New York 2017',
    link: 'https://makerfaire.com/new-york/',
  },
  {
    date: 'December 11-12, 2017',
    title: 'Professional Development: Jellybox 3D Printer Build',
    link: '',
  },
  // 2018
  {
    date: 'February 10, 2018',
    title: 'TSA Regional Conference Video Game judge',
    link: 'http://patsa.org/',
  },
  {
    date: 'April 18, 2018',
    title: 'TSA State conference Judge',
    link: 'http://patsa.org/conferences/state',
  },
  {
    date: 'July 9, 2018',
    title: 'Curriculum Development for Baldwin',
    link: '',
  },
  {
    date: 'Saturday, July 21, 2018',
    title: 'Advanced Robot Design & Programming with EV3',
    link: 'https://www.grasp.upenn.edu/programs/fll-coach-training',
  },
  {
    date: 'Sunday, September 23, 2018',
    title: 'World Maker Faire New York 2018',
    link: 'https://makerfaire.com/new-york/',
  },
  // 2019
  {
    date: 'February 9, 2019',
    title: 'TSA Regional Conference Video Game judge',
    link: 'http://patsa.org/',
  },
  {
    date: 'April 14-17, 2019',
    title: 'ATLIS Conference Presenter',
    link: 'https://www.theatlis.org/atlis-annual-conference-2019',
  },
  {
    date: '2019-2021',
    title: '',
    link: '',
  },
  {
    date: '2019-2020',
    title: 'Project Based Learning Certificate UPenn',
    link: 'https://www.gse.upenn.edu/tll/pblc',
  },
  {
    date: 'September 26, 2019',
    title: 'Speaker on PBL: PD event 3-4pm',
    link: 'https://docs.google.com/presentation/d/1zhz1FJpC-nPe7GYrE6duN2v21E692R1x8yqmUyfBbhk/edit?usp=sharing',
  },
  {
    date: 'September 27, 2019',
    title: 'Speaker for Lamplighters',
    link: '',
  },
  {
    date: 'September-December 2019',
    title: 'Lego Robotics FLL',
    link: '',
  },
  {
    date: 'October 1, 2019',
    title: 'Responsive Web Design Certification (300+ hours)',
    link: 'https://www.freecodecamp.org/certification/lilholt/responsive-web-design',
  },
  // 2020
  {
    date: 'September, 2020',
    title: 'React + Redux Certificate',
    link: 'https://www.sololearn.com/Certificate/1097-1907220/jpg',
  },
  {
    date: 'September, 2020',
    title: 'HTML Certificate',
    link: 'https://www.sololearn.com/Certificate/1014-1907220/jpg',
  },
  {
    date: 'October 1, 2020',
    title: 'Scientific Computing With Python Certification (300+ hours)',
    link: 'https://www.freecodecamp.org/certification/lilholt/scientific-computing-with-python-v7',
  },
  {
    date: 'October, 2020',
    title: 'CSS Certificate',
    link: 'https://www.sololearn.com/Certificate/1023-1907220/jpg',
  },
  {
    date: 'October, 2020',
    title: 'Swift 4 Certificate',
    link: 'https://www.sololearn.com/Certificate/1075-1907220/jpg',
  },
  // 2021
  {
    date: 'February 10, 2021',
    title: 'TSA Regional Conference Video Game judge',
    link: 'http://patsa.org/',
  },
  {
    date: 'April 21, 2021',
    title: 'SQL Certificate',
    link: 'https://www.sololearn.com/certificates/course/en/1907220/1060/landscape/png',
  },
  {
    date: 'April 27, 2021',
    title: 'Python Core Certificate',
    link: 'https://www.sololearn.com/certificates/course/en/1907220/1073/landscape/png',
  },
  {
    date: 'April 27, 2021',
    title: 'Machine Learning Certificate',
    link: 'https://www.sololearn.com/certificates/course/en/1907220/1094/landscape/png',
  },
  {
    date: '2021-2022',
    title: '',
    link: '',
  },
  // 2022
  {
    date: 'Jan 11',
    title: 'Gamification in a Virtual & In-Person Setting: Presenter at PIAS',
    link: '',
  },
  {
    date: 'May 4',
    title: 'Making Implicit Bias in Computer Science Apparent: Presenter at ATLIS',
    link: 'ATLIS CONFERENCE PRESENTATION JP_AL', // not a standard URL, update if you have one
  },
  {
    date: 'May 5',
    title: 'Beating The Hackers: Gamifying Cyber Security at 2022 ATLIS Conference',
    link: 'Cyber ATLIS: Beating the Hackers', // not a standard URL, update if you have one
  },
  // 2022-2023
  {
    date: '2022-2023',
    title: '',
    link: '',
  },
  {
    date: 'October 21',
    title: 'Gamification of the Remote Classroom: Presenter at PIAS',
    link: 'Gamification PIAS', // placeholder
  },
  {
    date: 'October',
    title: 'Gamification of the Remote Classroom: Keynote Speaker at CSTA Philly',
    link: 'Gamification Keynote', // placeholder
  },
  {
    date: 'Thursday, August 31',
    title: 'Cyber Security & You: Presenter at The Baldwin School',
    link: 'Cyber Security',
  },
  // 2023-2024
  {
    date: '2023-2024',
    title: '',
    link: '',
  },
  {
    date: 'April 17-18',
    title: 'Secure World Conference Attendee',
    link: '26044060-SWPHL2024.pdf', // local file or placeholder
  },
  {
    date: 'May 1',
    title: '2nd Symposium on AI Opportunities and Challenges (SAIOC)',
    link: 'Revised FINAL Changing the CS Education Landscape Based on the Evolution of AI-Usage in the CS Industry', // placeholder
  },
  {
    date: 'May',
    title: 'Led AI Exploration Session @ Baldwin',
    link: 'AI Exploration Session Ideation Document', // placeholder
  },
  {
    date: 'December',
    title: 'Publication: Mapping Software-Engineering Industry AI Use to Software-Engineering Curriculum',
    link: 'https://papers.academic-conferences.org/index.php/icair/article/view/3034/2912',
  },
  {
    date: 'December',
    title: 'Presented Research in Portugal',
    link: '',
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section">
      <h2 className="section-title">Professional Development</h2>
      <div className="timeline-container">
        {timelineData.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-date">
              <span>{item.date}</span>
            </div>
            <div className="timeline-content">
              <h3>{item.title || 'Untitled'}</h3>
              {/* Only render link if it's non-empty */}
              {item.link && (
                <p>
                  <a 
                    href={item.link.startsWith('http') ? item.link : '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {item.link}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
