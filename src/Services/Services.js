import React from "react"
import {Fade} from "react-awesome-reveal";
import './Services.css'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from "react-router-dom"

function Services () {

    let navigate = useNavigate();

    async function handleClickDesign() {
    navigate("/gallery/webdesign", { replace: true });
}
    async function handleClickPhotography() {
    navigate("/gallery/photos", { replace: true });
}
    async function handleClickVideography() {
    navigate("/gallery/videos", { replace: true });
}

    return (
        <>
        <Navbar/>

        <Fade casade delay={1500}>
        <h5 className="services-header">Services</h5>
        </Fade>

       
        <div className="service">
         <Fade left delay={1200}>
            <div className="service-wrap">
            <h6>
            <a target="_blank"  onClick={() => handleClickVideography("/gallery/videos")}>
                <span>Videography</span>
            </a>
            </h6>
            <img className="service-img" src={require("../Assests/16.jpg")} alt="" />
            </div>
         </Fade>
        
        <Fade right delay={1200}>
            <div className="service-wrap">
            <h6>
            <a target="_blank"  onClick={() => handleClickDesign("/gallery/webdesign")}>
                <span>Photography</span>
            </a>
            </h6>
            <img className="service-img" src={require("../Assests/6.jpg")} alt="" />
            </div>
        </Fade>

        <Fade Fade left delay={1200} >
            <div className="service-wrap">
            <h6>
            <a target="_blank"  onClick={() => handleClickPhotography("/gallery/photos")}>
                <span>UX/UI Design</span>
            </a>
            </h6>
            <img className="service-img" src={require("../Assests/Screenshot2.png")}  alt="" />
            </div>
        </Fade>

        <Fade right delay={1200}>
            <div className="service-wrap">
            <h6>
            <a href="https://www.sharegrid.com/p/manu_roy/white?type=rent&utm_source=whitelabel&utm_medium=member&utm_campaign=embed" target="_blank">
                <span>Equipment Rental</span>
            </a>
            </h6>
            <img className="service-img" src={require("../Assests/27.jpg")}  alt="" />
            </div>
        </Fade>
            
        </div>
        </>
    )
}

export default Services