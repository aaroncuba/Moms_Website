import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experiences from './Components/Experiences/Experiences'
import "./App.css"
import { useEffect } from "react";



function App() {
  useEffect(() => {
    document.title = "MINSURANCE4you";
  });

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;