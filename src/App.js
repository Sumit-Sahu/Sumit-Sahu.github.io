import React from 'react';
import './css/App.css'
import Header from './component/Header'
import About from './component/About'
import Skills from './component/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      {/* <Project /> */}
    </div>
    
  );
}

export default App;
