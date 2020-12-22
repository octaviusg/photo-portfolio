import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css';


function Navbar() {
    const [click, setClick] =useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton{false}
        }
    }
    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
             
             <div className="brand">OCTAVIO<span className="last">GARCIA</span></div>
               
                </div> {/* end of brand div */}

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-items'>
                        <Link to='/phographs' className='nav-links' onClick={closeMobileMenu}>
                            photographs
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='/journal' className='nav-links' onClick={closeMobileMenu}>
                            journal
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='/info' className='nav-links' onClick={closeMobileMenu}>
                            info
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            contact
                        </Link>
                    </li>
                    </ul>
                    {button && <Button buttonStyle='btn-outline'> send </Button>}
                </div> {/* end of navbar links */}
  
             </nav>  
        </>
    )
}

export default Navbar
