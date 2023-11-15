import React, { useEffect, useState } from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    "WEB DESIGN",
    "BRAND IDENTITY",
    "COPYWRITING",
    "PHOTO & VIDEO PRODUCTION",
    "ART DIRECTION",
    "DEVELOPMENT",
    "LET'S TALK ABOUT CIBERSECURITY",
    "YOUNG LAB"
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

      {/* <div className="skills-animation-container">
        <div className="skills-animation">
          {items.map((text, index) => (
            <div className="animation-text" key={index}>
              {text}
            </div>
          ))}
        </div>
      </div> */}

      <Row>
        <Col className="home-projects">
            <div className="group-home">
              <div className="home-project-link" onClick={()=>navigate("/projects")}>A FRESH APP IN VLC → <em>hooman</em></div>
              <img className="pic-home" src="../../public/hooman1.jpg" />
              <div className="text">NO. ① - FULL STACK PROJECT, WEB & BRANDING</div>
            </div>
            <div className="group-home">
              <div className="home-project-link" onClick={()=>navigate("/projects")}>   JEWELRY BRAND → <em>LA JARA</em></div>
              <img className="pic-home" src="../../public/jara.jpg" />
              <div className="text">NO. ② - BRAND, COPY, PHOTO & VIDEO, MKT DIG</ div>
            </div>
            <div className="group-home">
              <div className="home-project-link" onClick={()=>navigate("/projects")}  >FIRST CODING IN → <em>( M I N T )</em></div>
              <img className="pic-home" src="../../public/dental.jpg" />
              <div className="text">NO. ① - FULL STACK PROJECT, WEB & BRANDING</  div>
            </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className="line-title">VLC — SPAIN</div>
        <div className="line"></div>
        </Col>
      </Row>
    


    </Container>
  );
};
