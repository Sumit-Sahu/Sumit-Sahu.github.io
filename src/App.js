import React from 'react';
import './css/App.css'
import Header from './component/Header'
import About from './component/About'
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    
  );
}

export default App;
