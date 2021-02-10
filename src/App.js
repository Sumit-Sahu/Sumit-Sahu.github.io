import React from 'react';
import './css/App.css'
import Header from './component/Header'
import About from './component/About'
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>

  );
}

export default App;
