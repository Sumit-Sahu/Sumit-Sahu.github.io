import React from 'react';
import './App.css';
import Navbar from './component/navbar'
import Home from './component/home'
import Header from './component/header'
import About from './component/about'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
    </div>
    
  );
}

export default App;
