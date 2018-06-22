import React from "react";
import "../styles/Section.css";
import image1 from "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import image4 from "../images/image-4.jpg";
import image5 from "../images/image-5.jpg";
import image6 from "../images/image-6.jpg";
import image7 from "../images/image-7.jpg";
import image8 from "../images/image-8.jpg";
import image9 from "../images/image-9.jpg";
import image10 from "../images/image-10.jpg";
import image11 from "../images/image-11.jpg";
import image12 from "../images/image-12.jpg";


// By importing the Section.css file, it is added to the DOM whenever this component loads
const Section = () => (
  <section className="section">
    <h2>Villain Pics</h2>
    <p>
      <img src={image1} className="section-image" alt="Golam" width="300" height="300"/>
      <img src={image2} className="section-image" alt="Golam" width="300" height="300"/>
      <img src={image3} className="section-image" alt="Golam" width="300" height="300"/>
      <img src={image4} className="section-image" alt="Golam" width="300" height="300"/>
    </p>
    <p>
      <img src={image5} className="section-image" alt="Golam" width="300" height="300"/>
      <img src={image6} className="section-image" alt="Golam" width="300" height="300"/>
      <img src={image7} className="section-image" alt="Golam" width="300" height="300"/>
      <img src={image8} className="section-image" alt="Golam" width="300" height="300"/>
    </p>
    <p>
      <img src={image9} className="section-image" alt="Golam" width="300" height="300"/>
      <img src={image10} className="section-image" alt="Golam" width="300" height="300"/>
      <img src={image11} className="section-image" alt="Golam" width="300" height="300"/>
      <img src={image12} className="section-image" alt="Golam" width="300" height="300"/>
    </p>
    
  </section>
);

export default Section;
