/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.scss';
import MainWrapper from './components/MainWrapper';
import Header from './components/Header';
import Menu from './components/Menu';

const App = () => (
  <div className="App">
    <MainWrapper>
      <Header />
      <Menu />
    </MainWrapper>
  </div>
);

export default App;
