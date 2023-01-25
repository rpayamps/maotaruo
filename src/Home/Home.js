import React from "react"
import './Home.css'
import Icon from '../Icon'
import {Fade} from "react-awesome-reveal";
import { FaLink, FaInstagram, FaLinkedinIn} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {Link, useNavigate } from "react-router-dom"
import MobileNavgation from "../Navbar/MobileNavigation"
import classes from "../Navbar/Navbar.module.css"





function Home () {



    let navigate = useNavigate();


    async function handleClick() {
              navigate("/contact", { replace: true });
      }

     
    return (
      <>

      <div className="home-container">
        <section className ="vid-showcase">
        <div className="home">
   
          <div className={classes.NavBar}>
          <MobileNavgation/>
          </div>
          <img src={require("../Assests/Mao Tauro Logo 800x600.jpg")} alt="" className='logo' 
          style={{ height:'25%', zIndex:"-10001", position: "fixed", right: "0", bottom: "0"}}/>
          <Icon/>
          <div className="text">
            <div className="introduction">
            <Fade left delay={1000}>
            <h1>Welcome to</h1>
            </Fade>
            <Fade left delay={1400}>
            <h2>Mao Tauro <strong style={{color : '#c49414'}}> Productions </strong></h2>
            </Fade>
            </div>
            <Fade left delay={2000}>
            <p>Take a moment to explore our services and our gallery, which include a combination of collaborations, commissioned work, and side projects. Don’t hesitate to reach out if you’d like to learn more.</p>
            </Fade>
            <Fade casade delay={3000}>
            <div className="contact-me">
            <a target="_blank"  onClick={() => handleClick("/contact")}> Contact Me</a>
            </div>
            </Fade>
          </div>

          
          <div className="social">
          <Fade clear delay={3200}>
            <ul className="social">  
              <li><a href="https://www.instagram.com/mnu_roy/" className="fa fa-instagram"target="_blank"><FaInstagram/></a></li>
              <li ><a href="https://www.linkedin.com/in/manuroy/" className="fa fa-linkedin"target="_blank"><FaLinkedinIn/></a></li>
              <li ><a href="https://www.sharegrid.com/p/manu_roy/white?type=rent&utm_source=whitelabel&utm_medium=member&utm_campaign=embed" className="fa fa-sharegrid"target="_blank"><FaLink/></a></li>
              <li ><a href="mailto:contact@maotaruo.com" className="fa fa-email"target="_blank"><AiOutlineMail/></a></li>
            </ul>
            </Fade>
          </div> 
         
          <div className="menu">
            <ul>
              <Fade top delay={3300} >
              <li><Link to="/">Home</Link></li>
              </Fade>
              <Fade top delay={3200}>
              <li><Link to="/gallery">Gallery</Link></li>
              </Fade>
              <Fade top delay={3100}>
              <li><Link to="/services">Services</Link></li>
              </Fade>
              <Fade top delay={3000}>
              <li><Link to="/contact">Contact</Link></li>
              </Fade>
            </ul>
          </div> 
          </div>

        </section>
      
        </div>
        </>
    )
}


export default Home