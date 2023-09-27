import React from "react";
import "./Services.css";
import rideService from "./Images/3671304_clipdrop-background-removal.png";
import parkingService from "./Images/21937_clipdrop-background-removal.png";
function Services() {
  return (
    <div>
      <div class="container ">
        <div class="row row-main1">
          <div class="col Image-1">
            <img id="rideImage1" src={rideService}></img>
          </div>
          <div class="col RideServices-container1">
            <h1 id="RideServices-Title">RIDE SERVICES</h1>
            <p id="RideServices-Descripion">WAY TO RIDE</p>
            <div id="RideServices-Buttons">
              <center>
                <a id="ComingSoon">COMING SOON</a>
              </center>
              <p id="LearnMore">
                Group rides can be a chaotic affair, with riders getting
                separated and lost, and sometimes even meeting with accidents.
                When separated from the group, it’s difficult to know whether
                you’ve been left behind and you need to catch up, or you’ve
                overshot and you need to pull over and wait.
              </p>
            </div>
          </div>
        </div>
      </div>

<hr/>

      <div class="container">
        <div class="row row-main2">
          <div class="col RideServices-container2 ">
            <h1 id="RideServices-Title">PARKING SERVICES</h1>
            <p id="RideServices-Descripion">SPACE TO PARK</p>
            <div id="RideServices-Buttons">
              <center>
                <a id="ComingSoon">DOWNLOAD NOW</a>
              </center>
              <p id="LearnMore">
                Group rides can be a chaotic affair, with riders getting
                separated and lost, and sometimes even meeting with accidents.
                When separated from the group, it’s difficult to know whether
                you’ve been left behind and you need to catch up, or you’ve
                overshot and you need to pull over and wait.
              </p>
            </div>
          </div>
          <div class="col ">
          <div class="col Image-1"> 
            <img id="rideImage2" src={parkingService}></img>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default Services;
