import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Aboutme from './Components/Aboutme';
import Technologies from './Components/Technologies';
import Experience from './Components/Experience';
import Projects from './Components/Projects'; // Import Projects component
import Contact from './Components/Contacts'; // Import Contact component

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} /> {/* Add Projects route */}
          <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
