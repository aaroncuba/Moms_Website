import React from "react";
import "./About.css";
import image from "./IMG_3857.png";

const About = () => {
  function Button({ children }) {
    return <button>{children}</button>;
  }

  return (
    <div className="about" id="about">
      <div className="container">
        <div className="col-1">
          <img src={image} alt="Aaron Image" />
        </div>

        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p >
            <p className="text-format-1">
              IT Admin for an aviation and aerospace industry company.
              Responsible for activities within Identity Governance and
              deliverable of documentation for SOX Control Audit.
            </p>
            <p className="text-format-1">
              I have acquired high level programming knowledge from taking
              online courses at FIU, Udemy, Freecodecamp, and Coursera.
            </p>
            <p className="text-format-1">
              I have a passion for troubleshooting & learning. Enjoy working
              with groups, as the saying goes: 'two heads are better than one'.
            </p>
          </p>
          <p className="text-format-2">I am Aaron Estevanez, I love sports, a SUPER FC Barcelona fan.</p>
          <a
            href="https://www.linkedin.com/in/aaron-estevanez-6b0b1a167/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button">Explore More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
