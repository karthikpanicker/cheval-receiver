import React, { Component } from "react";
import "./Bills.css";
import bill from "../../images/bill.svg";
import { JsSpatialNavigation, Focusable } from "react-js-spatial-navigation";

class Bills extends Component {
  componentDidMount() {
    JsSpatialNavigation.focus(".btn-bill");
  }

  backToService = () => {
    this.props.onConfirmation();
  };
  render() {
    return (
      <div className="blur-container billcont">
        <div className="billicon">
          <img src={bill} alt={"bill"} />
          <h5>My Bill</h5>
        </div>
        <div className="col100 roombill">
          <div className=" roomdeet">
            <p className="roomdet1">Room Number 301</p>
            <p className="roomdet2">As of 24 Dec 2018</p>
          </div>
          <div className=" roomamt">
            <span>£</span>
            <p> 210</p>
          </div>
        </div>
        <p className="billmsg">
          For a detailed bill, please contact the front-desk
        </p>
        <Focusable onClickEnter={this.backToService} className="btn-bill">
          <button className="btn-primary btn-bill">OK</button>
        </Focusable>
      </div>
    );
  }
}

export default Bills;
