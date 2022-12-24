import React, { useState } from "react";
import "./Home.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const el = useRef(null);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["designer", "developer", "freelancer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      typeSpeed: 120,
      backSpeed: 110,
      src: "https://cdn.jsdelivr.net/npm/typed.js@2.0.12",
      loop: true,
    });
  }, []);

  return (
    <div className="hero" id='hero'>
      <div className="content">
        <p>Hello, my name is</p>
        <p>Aaron Estevanez</p>
        <p>
          I'm a <span ref={el}></span>
        </p>

      </div>
    </div>
  );
};

export default Home;
