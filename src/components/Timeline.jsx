// Timeline.jsx (example)

import React from 'react';
import TimelineCategory from './TimelineCategory';
import { presentationsData } from './presentationsData'; // <--- use correct path
import { certificationsData } from './certificationsData';
import { publicationsData } from './publicationsData';
import { professionalDevData } from './professionalDevData';
import './Timeline.css';

const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section">
      <h2 className="timeline-section-title">Accomplishments</h2>

      <div className="timeline-cards-container">
        <TimelineCategory
          title="Presentations/Guest Speaking"
          data={presentationsData}
        />
        {<TimelineCategory
  title="Publications/Curriculum Development"
  data={publicationsData}
/>}
        {<TimelineCategory
  title="Certifications"
  data={certificationsData}
/>}
{<TimelineCategory
  title="Professional Development/Etc."
  data={professionalDevData}
/>}
      </div>
    </section>
  );
};

export default Timeline;
