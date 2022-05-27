import React from 'react'
import ReactPlayer from 'react-player'
import './Videos.css'

function Videos() {

  return (
      <>
         <h5 className="videos-header">Vidoes</h5>
    <div className="videos">
    <div>
        <ReactPlayer url='https://youtu.be/6UR2v1AFDOw' />
    </div>
    <div>
    <ReactPlayer url='https://youtu.be/A2yAf0varZg' />
    </div>
    <div>
    <ReactPlayer url='https://youtu.be/4tY-jWZluUs' />
    </div>
    <div>
    <ReactPlayer url='https://youtu.be/_02i4f_mJ5w' />
    </div>
    </div>
    </>
  )
}

export default Videos