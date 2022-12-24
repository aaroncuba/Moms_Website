import "./Services.css";
import { FaCode } from "react-icons/fa";
import { HiDesktopComputer, HiDatabase } from "react-icons/hi";

function Services() {
  return (
    <div className="services">
      <div class="cards">
        <div class="card">
          <h2>
            <a>Databases</a>
          </h2>
          <p>Ability to use SQL to perform queries to databases.</p>
        </div>
        <div class="card">
          <h2>
            <a>Web</a>
          </h2>
          <p>
            Ability to use HTML, CSS & JS to develop simple and efficient
            websites.
          </p>
        </div>
        <div class="card">
          <h2>
            <a>Data Science</a>
          </h2>
          <p>
            Ability to use Python & Python libraries to collect data and perform
            analytics.
          </p>
        </div>
        <div class="card">
          <h2>
            <a>Apps</a>
          </h2>
          <p>
            Ability to use React Native for building simple native mobile
            applications.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
