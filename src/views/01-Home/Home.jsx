import React, { useEffect, useState } from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";

export const Home = () => {
  const [items, setItems] = useState([
    "WEB DESIGN",
    "BRAND IDENTITY",
    "COPYWRITING",
    "PHOTO & VIDEO PRODUCTION",
    "ART DIRECTION",
    "DEVELOPMENT",
    "LET'S TALK ABOUT CIBERSECURITY",
  ]);

  useEffect(() => {
    setItems((prevItems) => [...prevItems, ...prevItems, ...prevItems]);
  }, []);

  return (
    <Container className="home">
      <img className="banner" src="../../public/young_lab.png"></img>
      <Row>
        <Col className="home-about-box">
          <div className="home-about">Young lab solo es una forma de ponerle  nombre a todo lo que hago en el mundo digital. Un breve resumen de un  recorrido que nunca acaba y su forma va cambiando constantemente. No hay una meta. Solo una ambición desmedida por pasarlo bien.
          </div>
          <div className="home-about">Se lo que cuesta tomar la decisión de   emprender, nunca es fácil y una de las <em>movaidas</em> grandes de esto es  encontrar a gente que quiera y sepa adaptarse a ti, que escuche y sea  consciente de lo que tiene entre manos. Ser una piecita más de tu  proyecto, acompañandote en el proceso y verlo crecer va a ser increíble. 
          </div>
          <div className="home-about">La investigación es una parte chulísima de esto. Siempre he creído que no es más profesional saber hacerlo todo, sino ser capaz de averiguar cómo se hace. <br/>Esto va increíblemente rápido, cambia cada día como si fueran las escaleras de <em>Hogwarts</em>, hay que moverse con soltura. 
          </div>
        </Col>
      </Row>

      <div className="skills-animation-container">
        <div className="skills-animation">
          {items.map((text, index) => (
            <div className="animation-text" key={index}>
              {text}
            </div>
          ))}
        </div>
      </div>
    


    </Container>
  );
};
