import {React, useState} from 'react'
// import { allImages } from '../Firebase'
import './Photos.css'
import { motion } from 'framer-motion'
import { Outlet} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function Photos({ onImageClick }) {

     



    const [photos, setPhotos] = useState([
            require("../Assests/1.jpg"),
            require("../Assests/2.jpg"),
            require("../Assests/3.jpg"),
            require("../Assests/4.jpg"),
            require("../Assests/5.jpg"),
            require("../Assests/6.jpg"),
            require("../Assests/7.jpg"),
            require("../Assests/8.jpg"),
            require("../Assests/9.jpg"),
            require("../Assests/10.jpg"),
            require("../Assests/11.jpg"),
            require("../Assests/12.jpg"),
            require("../Assests/13.jpg"),
            require("../Assests/14.jpg"),
            require("../Assests/15.jpg"),
            require("../Assests/16.jpg"),
            require("../Assests/17.jpg"),
            require("../Assests/18.jpg"),
            require("../Assests/19.jpg"),
            require("../Assests/20.jpg"),
            require("../Assests/21.jpg"),
            require("../Assests/22.jpg"),
            require("../Assests/23.jpg"),
            require("../Assests/24.jpg"),
            require("../Assests/25.jpg"),
            require("../Assests/26.jpg"),
            require("../Assests/27.jpg"),
          ])


    




    const images = photos.map((image, index) => { 
    
    return (  

               
    
           <div className="image-container" key={index}  
           onClick={() => onImageClick(image)} 
           >
                <motion.img className="images" src={image} alt="" 
               initial={{opacity: 0}}
               animate={{ opacity: 1}}
               transition={{ delay: 1}}
                />
            </div>
        
        
    )})


  return (

   <>
     <Fade casade delay={1500}>
     <h5 className="photos-header">Photos</h5>
     </Fade>
    <div className="photos">
        {images}
        <Outlet/>
    </div>
     </>
  )
}

export default Photos