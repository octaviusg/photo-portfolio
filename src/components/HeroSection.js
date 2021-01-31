import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection (){
    return (
        <div className="hero-container">
            <div className="hero-image">
           <img src="../images/delrio2019.jpg" alt="goats"/>
           <p>Del Rio - Texas 2019</p>
        </div>
        </div>
    );
}

export default HeroSection