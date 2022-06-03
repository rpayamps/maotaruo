import React from 'react'
import {Link} from "react-router-dom"
import Fade from 'react-reveal/Fade';


const NavLinks = (props) => {
  return (
    <div>
        <ul>          
        <Fade top delay={800} > 
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/">Home</Link></li>
        </Fade>
        <Fade top delay={700} > 
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/gallery">Gallery</Link></li> 
        </Fade>      
        <Fade top delay={600}>
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/services">Services</Link></li>
        </Fade>
        <Fade top delay={500}>
              <li onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/contact">Contact</Link></li>   
        </Fade>          
       </ul>
    </div>
  )
}

export default NavLinks