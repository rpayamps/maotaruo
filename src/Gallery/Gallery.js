import React from 'react'
import './Gallery.css'
import { Link, Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Gallery() {
  return (
    <>
    <Navbar />
    <div className="gallery">


        <div className='gallery-nav'>
        <Link to="/gallery/photos" className='gallary-link'> Photos </Link>
        <Link to="/gallery/videos" className="gallary-link" > Videos </Link>
        <Link to="/gallery/webdesign" className='gallary-link'> UX/UI Design </Link>
        </div>
        
        <Outlet/>
    </div>
    </>
  )
}

export default Gallery