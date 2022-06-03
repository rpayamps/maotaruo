import {React} from 'react'
import MobileNavgation from './MobileNavigation';
import Navigation from './Navigation';
import classes from "./Navbar.module.css"


function Navbar () {




  



    return (

      <div className={classes.NavBar}>
          <MobileNavgation/>
          <Navigation/>
      </div>
    )
}


export default Navbar