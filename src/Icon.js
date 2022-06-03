import React from "react";
import Fade from 'react-reveal/Fade'
import './Icon.css'


function Icon() {
    // Home Page Camera Pure CSS 
  return (
      <Fade top delay={2500}>
    <div className="camera">
        <div class="container">
  <div class="camera-top">
    <div class="zoom"></div>
    <div class="mode-changer"></div>
    <div class="sides"></div>
    <div class="range-finder"></div>
    <div class="focus"></div>
    <div class="red"></div>
    <div class="view-finder"></div>
    <div class="flash">
      <div class="light"></div>
    </div>
  </div>
  <div class="camera-mid">
    <div class="sensor"></div>
    <div class="lens"></div>
  </div>
  <div class="camera-bottom"></div>
</div>
</div>
</Fade>
  );
}

export default Icon;