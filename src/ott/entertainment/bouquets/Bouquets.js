import React, { Component } from "react";
import "./Bouquets.css";
import MarvelLogo from "../../../images/marvel_logo.png";
import Movieposter from "../../../images/railimg.jpg";
import { Focusable } from "react-js-spatial-navigation";

class Bouquets extends Component {
  render() {
    return (
      <Focusable className="marvelrow">
        <div className="marveltilesrow">
          <div className="mlogocontainer">
            <div className="marvellogo">
              <img src={MarvelLogo}  alt={"logo"}/>
            </div>
          </div>
          <div className="marvelmovierail">
            <div className="moviepricetile">
              <h5>$35</h5>
              <h6>Buy now</h6>
            </div>
            <div className="marveltiles">
              <img src={Movieposter} alt={"poster"} />
            </div>
            <div className="marveltiles">
              <img src={Movieposter} alt={"poster"}/>
            </div>
            <div className="marveltiles">
              <img src={Movieposter} alt={"poster"}/>
            </div>
          </div>
        </div>
      </Focusable>
    );
  }
}

export default Bouquets;
