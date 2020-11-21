import React, { Component } from "react";
import "./movie-tile.css";
import {Focusable} from "react-js-spatial-navigation";

class Movietile extends Component {
    movie = this.props.movie;
    constructor(props) {
        super(props);
        this.selectMovie = this.selectMovie.bind(this);
    }
    selectMovie = () => {
        this.props.onSelect(this.movie);
    }
  render() {
    return (
        <Focusable className={"movietile item-"+ this.movie.id} onClickEnter={this.selectMovie}>
                <img src={this.movie.poster}  alt={this.movie.title}/>
        </Focusable>
    );
  }
}

export default Movietile;
