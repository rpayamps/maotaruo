import {React, useState} from 'react'
import ReactPlayer from 'react-player'
import { findDOMNode } from 'react-dom'
import { toast } from 'react-toastify';
import Fade from 'react-reveal/Fade';
import './Videos.css'

function Videos() {

  const [fullscreenMode, setFullscreenMode] = useState(false)
    let player = null;
    const ref = (p) => {player = p;}
    
    const onStart = () => {
        if (fullscreenMode)
            findDOMNode(player).requestFullscreen().catch(
                (err) => 
                {toast.error("Could not activate full-screen mode :(")}
            );
    }

    const onEnded = () => {
        setFullscreenMode(document.fullscreenElement() !== null);
    }

  return (
      <>
       <Fade casade delay={1500}>
         <h5 className="videos-header">Videos</h5>
        </Fade>
    <div className="videos">

    <Fade left delay={1500}>
    <div className="video-container">
        <ReactPlayer url='https://youtu.be/6UR2v1AFDOw'
         ref={ref}
        onStart={onStart}
        onEnded={onEnded}
        className="video"
         />
    </div>
    </Fade>

    <Fade right delay={1500}>
    <div className="video-container">
    <ReactPlayer url='https://youtu.be/A2yAf0varZg'
             ref={ref}
            onStart={onStart}
            onEnded={onEnded}
            className="video"
    
    />
    </div>
    </Fade>

    <Fade left delay={1500}>
    <div className="video-container">
    <ReactPlayer url='https://youtu.be/4tY-jWZluUs' 
         ref={ref}
        onStart={onStart}
        onEnded={onEnded}
        className="video"
    />
    </div>
    </Fade>

    <Fade right delay={1500}>
    <div className="video-container">
    <ReactPlayer url='https://youtu.be/_02i4f_mJ5w'
        ref={ref}
        onStart={onStart}
        onEnded={onEnded}
        className="video"
    />
    </div>
    </Fade>


    </div>
    </>
  )
}

export default Videos