import React from "react";
import "./WatGallery.css";
import Aos from "aos";
import "aos/dist/aos.css";

function WatGallery() {
  Aos.init({ duration: 1000 });
  return (
    <div data-aos="fade-up" className="gallery">
      {" "}
      <img src="../images/M645426.jpg" alt="New Sweden, Texas" />
      <p>Big Bend, Texas - 2020</p>
      <img src="../images/001176.jpg" alt="New Sweden, Texas" />
      <p>New Sweden, Texas - 2020</p>
      <img src="../images/001140.jpg" alt="Troy, Texas" />
      <p>Troy, Texas - 2020</p>
      <img src="../images/001277e.jpg" alt="Austin, Texas" />
      <p>Naus Enfield Drug Store Austin, Texas - 2020</p>
      <img src="../images/img20200519.jpg" alt="Austin, Texas" />
      <p>Lake Amistad, Texas - 2020</p>
    </div>
  );
}

export default WatGallery;
