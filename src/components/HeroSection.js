import React from "react";

import "../App.css";
import "./HeroSection.css";

import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

function HeroSection() {
  Aos.init({ duration: 2000 });
  return (
    <div data-aos="fade-up" className="hero-container">
      <div className="hero-image">
        <img src="../images/delrio2019.jpg" alt="goats" />
        <p>Del Rio - Texas 2019</p>
        <div className="line"></div>

        <div className="photolinks">
          <Link to="/nightwheelin">Night Wheelin'</Link>
          <Link to="/waltzacrosstexas">Waltz Across Texas</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
