import React from 'react'
import "./WebDesign.css"
import Fade from 'react-reveal/Fade';


function WebDesign() {
  return (
    <>


<Fade casade delay={1500}>
      <h5 className="web-design-header">Web Design</h5>
</Fade>
   
    
    <div className="web-design">
    <Fade left delay={1200}>
    <div className="image-1">
    <a href="https://www.btmexica.com/">
        <img className="web-design-image" src={require('../Assests/Screenshot1.png')} alt="" />
    </a>
    </div>
    </Fade>
    <Fade right delay={1200} >
    <div className='image-2' >
    <a href="https://www.unichemusa.com/">
    <img className='web-design-image' src={require('../Assests/Screenshot2.png')} alt="" />
    </a>
    </div>
    </Fade>


    </div>

    </>

  )
}

export default WebDesign