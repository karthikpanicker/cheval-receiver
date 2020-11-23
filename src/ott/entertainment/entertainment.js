import React, { Component } from "react";
import "./entertainment.css";
import Banner from "./banner/banner";
import Rail from "./rail/rail";
import logo from "../../images/logo_caeigo.svg";

class Entertainment extends Component {
  constructor(props) {
    super(props);
    this.onMovieSelection = this.onMovieSelection.bind(this);
  }
  onMovieSelection = movie => {
    this.props.onMovieSelection(movie);

  };
  render() {
    return (
      <div className="container-fluid ph-0">
        <div className="emcontainer">
          <div className="mainlogo">
            <img src={logo}  alt={"logo"}/>
          </div>
          <Banner onSelect={this.onMovieSelection} movie={this.props.store.banner}/>
          <div className="container">
            {this.props.store.rails.map((rail, i) => (
              <Rail rail={rail} key={i} onSelectMovie={this.onMovieSelection} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Entertainment;
