import React from "react";
import "./WatGallery.css";
import Aos from "aos";
import "aos/dist/aos.css";

function NwGallery() {
  Aos.init({ duration: 1000 });
  return (
    <div data-aos="fade-up" className="gallery">
      <img src="../images/10.13.18019.jpg" loading="lazy" alt="Top Notch" />
      <p>Top Notch, Austin, Texas - 2020</p>
      <img src="../images/elcamino.jpg" loading="lazy" alt="El Camino" />
      <p> Austin, Texas - 2020</p>
      <img src="../images/M645484.jpg" loading="lazy" alt="Liberty" />
      <p>Liberty Bar, Austin, Texas - 2020</p>
      <img src="../images/M645414.jpg" loading="lazy" alt="elcamino" />
      <p> Austin, Texas - 2020</p>
      <img src="../images/001326.jpg" loading="lazy" alt="elcamino" />
      <p> Austin, Texas - 2020</p>
      <img src="../images/M645491.jpg" loading="lazy" alt="elcamino" />
      <p> Austin, Texas - 2020</p>
      <img src="../images/dudemotel.jpg" loading="lazy" alt="Dude Motel" />
      <p> West Yellowstone, Montana - 2020</p>
      <img src="../images/arbys2019.jpg" loading="lazy" alt="Arbys" />
      <p> Austin, Texas - 2020</p>
    </div>
  );
}

export default NwGallery;
