/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.scss';
import MainWrapper from './components/MainWrapper';
import Header from './components/Header';
import Menu from './components/Menu';
import SectionWrapper from './components/SectionWrapper';
import TechStack from './components/TechStack';

const App = () => (
  <div className="App">
    <MainWrapper>
      <Header />
      <Menu />
      <SectionWrapper title="Tech stack">
        <TechStack />
      </SectionWrapper>
    </MainWrapper>
  </div>
);

export default App;
