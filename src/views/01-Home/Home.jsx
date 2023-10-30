import React, { useEffect, useState } from "react";
import "./Home.css";
import { Container } from "react-bootstrap";

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
    setItems((prevItems) => [...prevItems, ...prevItems]);
  }, []);

  return (
    <Container>
      <img className="banner" src="../../public/young_lab.png"></img>

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
