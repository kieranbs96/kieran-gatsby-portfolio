import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const Experience = () => {
  const { experience } = useContext(PortfolioContext);

  if (!experience?.jobs) {
    return 'Loading...';
  }

  const { title, jobs } = experience;
  const { currentItem, changeItem } = useTabs(0, jobs);

  return (
    <section id="experience">
      <Container>
        <div className="experience-wrapper">
          <Title title={title} />
          <div className="job-list">
            <div className="job-list__options">
              {jobs.map((job, index) => (
                <button
                  type="button"
                  className={currentItem?.name === job.name ? 'active' : ''}
                  key={job.name}
                  onClick={() => changeItem(index)}
                >
                  {job.name}
                </button>
              ))}
            </div>
            <div className="job-list__selected">
              <h3>
                {currentItem?.title} // <strong>{currentItem?.name}</strong>
              </h3>
              <p className="date">
                {currentItem?.date?.from} - {currentItem?.date?.until}
              </p>
              <p className="location">{currentItem?.location}</p>
              <div className="tags">
                {currentItem?.tags.map((tag) => (
                  <span className="highlight">{tag}</span>
                ))}
              </div>
              <div className="job-desc">
                {currentItem?.jobDesc.map((desc) => (
                  <p>{desc}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
