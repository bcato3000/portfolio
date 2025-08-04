import React from 'react';
import './styles/styles.css';
import Header from './components/Header';
import WorkExamples from './components/WorkExamples';
import Skills from './components/Skills';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <main className="App" >
      <Header />
      <WorkExamples />
      <Skills />
      <WorkHistory />
      <Education />
      <About />
      <Contact />
      <Footer />
    </main>
    </>
  );
}

export default App;
