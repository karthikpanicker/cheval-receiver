 import React, { Component } from "react";
import "./banner.css";
import Heroimg from "../../../images/heroimg.jpeg";
 import {Focusable} from "react-js-spatial-navigation";
class Banner extends Component {

  onSelect = () => {
    this.props.onSelect(this.props.movie);
  }
  render() {
    return (
      <Focusable className="heroimg" onClickEnter={this.onSelect}>
        <img src={Heroimg} alt={"banner"} />
      </Focusable>
    );
  }
}

export default Banner;
