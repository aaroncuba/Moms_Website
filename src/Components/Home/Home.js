import React, { useState } from "react";
import "./Home.css";
import { useRef } from "react";

const Home = () => {
  const el = useRef(null);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="hero" id="hero">
      <div className="content">
        <p>Seguro Médico</p>
        <p>Seguridad para ti y tu familia sin estrezar tu cartera</p>
      </div>
    </div>
  );
};

export default Home;
