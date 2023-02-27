import { React } from 'react'
import MobileNavgation from './MobileNavigation';
import Navigation from './Navigation';
import classes from "./Navbar.module.css"
import {Link} from "react-router-dom"



function Navbar () {
    return (

      <div className={classes.NavBar}>
        <Link to="/"><img src={require("../Assests/Mao Tauro Logo 800x600.jpg")} alt="" className='logo' style={{height: "120%"}}/></Link>
          <MobileNavgation/>
          <Navigation/>
      </div>
    )
}


export default Navbar