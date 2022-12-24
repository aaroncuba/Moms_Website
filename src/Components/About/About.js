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
          <h2>Nos encargamos de todo y facilitamos el camino</h2>
          <span className="line"></span>
          <p>
            <p className="text-format-1">
              Estados Unidos brinda la más amplia gama de seguros médicos pero
              desgraciadamente la mayor parte de las personas los desconocen y
              no sacan el mayor provecho de su seguro.
            </p>
            <p className="text-format-1">
              Un ejemplo: ObamaCare, muchas personas desconocen sus beneficios y
              sobre todo cómo calificar para suscribirse.
            </p>
            <p className="text-format-1">
              Pero tranquilo tendrás un experto en ObamaCare de tu lado, además
              de acceso a los mejores planes que las aseguradoras pueden
              ofrecer.
            </p>
          </p>
          <p className="text-format-2">
            Ponemos a tu disposición asesores expertos con el toque humano que
            ganará tu confianza
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
