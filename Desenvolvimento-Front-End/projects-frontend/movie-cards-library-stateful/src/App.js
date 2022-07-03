import React from 'react';
import Header from './components/Header';
import Data from './data';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ Data } />
    </div>
  );
}

export default App;
