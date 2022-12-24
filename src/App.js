import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Benefits from './Components/Benefits/Benefits'
import "./App.css"
import { useEffect } from "react";



function App() {
  useEffect(() => {
    document.title = "MINSURANCE4YOU";
  });

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Benefits />
      <Contact />
    </div>
  );
}

export default App;