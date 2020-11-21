import React, { Component } from "react";
import "./rail.css";
import MovieTile from "../movie-tile/movie-tile";

class Rail extends Component {

    constructor(props) {
        super(props);
        this.onSelectMovie = this.onSelectMovie.bind(this);
    }
    onSelectMovie = (movie) => {
         this.props.onSelectMovie(movie);
    }
  render() {
    return (
      <div className="railrow">
        <h5 className="railhead">{this.props.rail.title}</h5>
        <div className="movietilesrow">
            {this.props.rail.movies.map((movie, i) =>  <MovieTile movie={movie} key={i} onSelect={this.onSelectMovie} />)}
        </div>
      </div>
    );
  }
}

export default Rail;
