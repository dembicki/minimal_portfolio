/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.scss';
import MainWrapper from './components/MainWrapper';
import Header from './components/Header';
import Menu from './components/Menu';
import SectionWrapper from './components/SectionWrapper';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => (
  <div className="App">
    <MainWrapper>
      <a href="#experience">exp</a>
      <a href="#contact">contact</a>
      <Menu />
      <Header />
      <SectionWrapper title="Tech stack" minHeight="60vh">
        <TechStack />
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
