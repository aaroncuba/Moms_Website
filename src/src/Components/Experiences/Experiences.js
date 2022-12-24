import React from "react";
import "./Experiences.css";
import Sphere from "../Icons/icons";
import Services from "../Services/Services";



const Experiences = () => {

  return (
    <div className="experiences" id="experiences">
      <div className="container">
        <h2>Experiences</h2>
        <span className="line"></span>
        <div className="content">
        <Services/>
        <Sphere />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
