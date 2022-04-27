import './App.css';
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import data from './components/data';

function App() {
  const cards = data.map(item => {
  return (
    <MainContent {...item}/>
  )
  })
  return (
    <div className="App">
      <Header />
     <section>{cards}</section>
    </div>
  );
}

export default App;
