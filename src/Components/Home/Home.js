import React, { useState } from "react";
import "./Home.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const el = useRef(null);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);


  return (
    <div className="hero" id='hero'>
      <div className="content">
        <p>Health Insurance</p>
        <p>Security for you and your family without stressing your wallet</p>
      </div>
    </div>
  );
};

export default Home;
