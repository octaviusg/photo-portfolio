import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'react-external-link';

import React, { useState, useEffect } from 'react';
import './Navbar.css';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  window.addEventListener('resize', showButton);

  return (
    <>
      <motion.nav className='navbar'>
        <div className='navbar-container'>
          <NavLink to='/' className='brand' onClick={closeMobileMenu}>
          <div className="brand">OCTAVIO<span className="last">GARCIA</span></div>
    
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' onClick={closeMobileMenu} exact={true} activeClassName='is-active'>
                photographs
              </NavLink>
            </li>
            
            
          
            <li className='nav-item'>
              <NavLink
                to='/information'
                className='nav-links'
                onClick={closeMobileMenu}
                exact={true} activeClassName='is-active'
                >
                information
              </NavLink>
            </li>

       

            <li className='nav-item'>
          
                
             <ExternalLink href= "https://prints.octaviogarcia.co/">
             <span className='nav-links'>/ prints</span>
            </ExternalLink>
              
            </li>

          </ul>
          
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;