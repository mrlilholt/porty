import React, { useState } from 'react';
import './TimelineCategory.css';

const TimelineCategory = ({ title, data }) => {
  // Local state to track if we show all or just the first three
  const [showAll, setShowAll] = useState(false);

  // If not showing all, slice the array to only the first 3
  const itemsToDisplay = showAll ? data : data.slice(0, 3);

  // Determine if we even *have* more than 3 items
  const hasMoreThanThree = data.length > 3;

  return (
    <div className="timeline-category-card">
      <h3 className="timeline-category-title">{title}</h3>
      
      <ul className="timeline-category-list">
        {itemsToDisplay.map((item, idx) => (
          <li key={idx} className="timeline-item">
            <div className="timeline-item-header">
              <div className="timeline-item-date">{item.date}</div>
              <div className="timeline-item-content">
                <strong>
                  {item.link ? (
                    <a
                      href={item.link.startsWith('http') ? item.link : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-item-link"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </strong>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {hasMoreThanThree && (
        <button
          className="timeline-toggle-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default TimelineCategory;
