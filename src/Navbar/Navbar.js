import React from 'react'
import {Link} from "react-router-dom"
import Fade from 'react-reveal/Fade';
import {motion} from "framer-motion"
import "./Navbar.css"


function Navbar () {

    let activeStyle = {
        textDecoration: "underline",
      };

    return (

      <div className='navbar-container'>
        <Fade top delay={1000}>
        <nav className='navBar'>
            <li><motion.a
            whileHover={{
              scale: 1.1,
          }}
            ><Link to="/">Home</Link></motion.a></li>
              <li><motion.a
               whileHover={{
                scale: 1.1,
            }}><Link to="/gallery">Gallery</Link></motion.a></li>
              <li><motion.a
              whileHover={{
                scale: 1.1,
            }}><Link to="/services">Services</Link></motion.a></li>
            <li><motion.a
             whileHover={{
              scale: 1.1,
          }}><Link to="/contact">Contact</Link></motion.a></li>
        </nav>
        </Fade>
      </div>
    )
}


export default Navbar