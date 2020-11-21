import React, { Component } from "react";
import "./NavTile.css";
import { Focusable } from "react-js-spatial-navigation";

class NavTile extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  navigate(event) {
    event.preventDefault();
    this.props.onEnter(this.props.menu);
  }

  onFocus() {
    this.props.onFocus(this.props.menu);
  }
  render() {
    return (
      <Focusable
        onClickEnter={this.navigate}
        onFocus={this.onFocus}
        className={"focusable landfocus " + this.props.menu}
      >
        <div className="listopt active">
          <div className="listimg">
            <img src={require(`../../images/${this.props.icon}`)} alt="about" />
          </div>
          <div className="listcontent">
            <p href="/about">{this.props.title}</p>
          </div>
        </div>
      </Focusable>
    );
  }
}

export default NavTile;
