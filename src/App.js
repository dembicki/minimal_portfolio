/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.scss';
import MainWrapper from './components/MainWrapper';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SectionWrapper from './components/SectionWrapper';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
// import Arrow from './components/Arrow';

const App = () => (
  <div className="App">
    <MainWrapper id="top">
      <Navigation />
      <Header />
      {/* <Arrow /> */}
      <SectionWrapper title="Tech stack" minHeight="60vh">
        <TechStack />
      </SectionWrapper>
      <SectionWrapper title="Projects" id="projects">
        <Projects />
      </SectionWrapper>
      <SectionWrapper title="Experience" id="experience">
        <Experience />
      </SectionWrapper>
      <SectionWrapper title="Contact" id="contact">
        <Contact />
      </SectionWrapper>
    </MainWrapper>
  </div>
);

export default App;
