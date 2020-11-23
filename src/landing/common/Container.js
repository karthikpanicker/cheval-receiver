import React, { Component } from "react";
import "./Container.css";
import NavTile from "./../nav-tile/NavTile";
import caeigo from "../../images/caeigo.svg";
import {
  JsSpatialNavigation
} from "react-js-spatial-navigation";
import QrCode from "../qr-code/QrCode"

class Container extends Component {

  componentDidMount() {
    JsSpatialNavigation.focus(this.props.defaultFocus);
  }



    getClassName() {
    return this.props.services ? "listmain listservices" : "listmain";
  }
  render() {
    return (
      <div className="container-fluid ph-0">
        <div
          className="maintophead"
          style={{ backgroundImage: this.props.bgStyle }}
        >
          <div className="container pabs">
            <div className="mainlogo">
              <img src={caeigo} alt="Logo"/>
            </div>
            {
              this.props.qr &&
              <div className="pull-right">

                <QrCode></QrCode>
              </div>
            }
            <div className="tophead lanhead">
              <h2 className="ma-0">{this.props.title}</h2>
              <h4 className="ma-0">{this.props.description}</h4>
            </div>
            <div className="row">
              <div className={this.getClassName()}>
                  {this.props.tiles.map((tile, i) => (
                    <NavTile
                      key={i}
                      title={tile.title}
                      icon={tile.icon}
                      menu={tile.menu}
                      onFocus={this.props.onFocus}
                      onEnter={this.props.onEnter}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
