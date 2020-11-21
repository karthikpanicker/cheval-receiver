import React, { Component } from "react";
import "./Ott.css";
import {
    JsSpatialNavigation
} from "react-js-spatial-navigation";
import Entertainment from "./entertainment/entertainment";

class Ott extends Component {
  store = this.props.store;
  constructor(props) {
    super(props);
    this.selectMovie = this.selectMovie.bind(this);
  }


  componentDidMount() {
      document.body.addEventListener('smartremote:RETURN',this.resetFocus );
      if(this.store.selectedMovie) {
          JsSpatialNavigation.focus(`.item-${this.store.selectedMovie.id}`);
      } else {
          JsSpatialNavigation.focus(`.item-1`);
      }

  }
    componentWillUnmount() {
        document.body.removeEventListener("smartremote:RETURN", this.resetFocus);
    }

    resetFocus = () => {
        this.store.resetSelectedMovie();
        let { history } = this.props;
        history.push({
            pathname: `/`,
        });
    };

  selectMovie = (movie) => {
      this.store.selectMovie(movie)
      let { history } = this.props;
      history.push({
          pathname: `/preview`,
      });
  }
  render() {
    return (
      <div>
       <Entertainment store={this.store} onMovieSelection={this.selectMovie} history={this.props.history}/>
      </div>
    );
  }
}

export default Ott;
