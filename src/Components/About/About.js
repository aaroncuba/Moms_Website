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
          <img src={image} alt="Family Image" />
        </div>

        <div className="col-2">
          <h2>We take care of everything and facilitate the way</h2>
          <span className="line"></span>
          <p>
            <p className="text-format-1">
              The United States offers the widest range of health insurance, but
              unfortunately most people are unaware of it and do not get the
              most out of their insurance.
            </p>
            <p className="text-format-1">
              An example: ObamaCare, many people are unaware of its benefits and
              especially how to qualify to subscribe.
            </p>
            <p className="text-format-1">
              But don't worry, you'll have an ObamaCare expert on your side, as
              well as access to the best plans that insurers can offer.
            </p>
          </p>
          <p className="text-format-2">
            We put at your disposal expert advisors with the human touch that
            will earn your trust
          </p>
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
