import React from "react";

import { ExternalLink } from "react-external-link";
import Mailto from "reactv16-mailto";

import "../App.css";
import "./InfoSection.css";

function infoSection() {
  return (
    <div className="infocontainer">
      <div className="info-parent">
        <div className="section-1">
          <p className="date">b.1992 Del Rio, Texas</p>
          <p className="bio">
            Octavio is a Texas native currently based out of Austin,Tx. He began
            practicing photography through the documentation of the landscapes
            around him. Sometime after 2013 he began to branch out into
            different enviroments, and found something worth noting within the
            cityscapes and urban scenes. Presently he is still furthering the
            same interests; aiming for the places and people of Texas.
          </p>
          email:
          <Mailto
            className="email"
            email="hello@octaviogarcia.co"
            obfuscate={true}
          >
            {" "}
            hello@octaviogarcia.co
          </Mailto>
          <p>
            social:
            <ExternalLink href="https://www.instagram.com/octaviusgarcia/">
              <span> instagram, </span>
            </ExternalLink>
            <ExternalLink href="https://www.flickr.com/photos/155948075@N08/">
              <span> flickr, </span>
            </ExternalLink>
            <ExternalLink href="https://twitter.com/octaviusgarcia">
              <span> twitter</span>
            </ExternalLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default infoSection;
