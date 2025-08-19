import React from 'react';
import { motion } from 'framer-motion';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

 // 

function App() {
  return (
    <div className="page-wrapper">
      <Home />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}



export default App;




