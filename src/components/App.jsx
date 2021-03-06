import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, experienceData, projectsData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setExperience({ ...experienceData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, experience, footer }}>
      <div className="big-border big-border-top" />
      <div className="big-border big-border-left" />
      <div className="big-border big-border-right" />
      <div className="big-border big-border-bottom" />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
