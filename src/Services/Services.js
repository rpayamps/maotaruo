import React from "react"
import Navbar from "../Navbar/Navbar"
import './Services.css'

function Services () {

    return (
        <>
        <Navbar/>
        <h5 className="services-header">Services</h5>
        <div className="service">
            <div className="service-wrap">
            <h6>
                <span>Videography</span>
            </h6>
            <img className="service-img" src={require("../Assests/16.jpg")} alt="" />
            </div>

            <div className="service-wrap">
            <h6>
                <span>Photography</span>
            </h6>
            <img className="service-img" src={require("../Assests/6.jpg")} alt="" />
            </div>

            <div className="service-wrap">
            <h6>
                <span>UX/UI Design</span>
            </h6>
            <img className="service-img" src={require("../Assests/Screenshot2.png")}  alt="" />
            </div>

            <div className="service-wrap">
            <h6>
                <span>Equipment Rental</span>
            </h6>
            <img className="service-img" src={require("../Assests/27.jpg")}  alt="" />
            </div>
            
        </div>
        </>
    )
}

export default Services