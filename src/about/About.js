import React, { Component } from "react";
import "./About.css";
import logo from "../images/cantiz_connect_logo.svg";

class About extends Component {
  render() {
    return (
      <div className="container-fluid ph-0">
        <div className="maintophead aboutheadmain">
          <div className="container pabs">
            <div className="mainlogo">{<img src={logo} alt={"hotel"}/>}</div>
            <div className="tophead abouthead">
              <h2 className="ma-0">CHEVAL COLLECTION</h2>
              <h4 className="ma-0">The smart way to live in the city.</h4>
              <p className="aboutdata">
                  Cheval Collection has earned a reputation for exceptional service and quality, and is recognised for being at the leading edge in the development and management of luxury serviced apartments and residences.
              </p>
                <p className="aboutdata">
                  The current eight Residences in operation include a total of 512 apartments, ranging from open plan one-bedroom layouts to grand penthouses, all situated in prime locations. Cheval Collection has extensive expertise and resource available to take on new projects, from inception to opening.


              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
