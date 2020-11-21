import React, { Component } from "react";
import "./Preview.css";
import { Focusable } from "react-js-spatial-navigation";
import {
    JsSpatialNavigation
} from "react-js-spatial-navigation";
import previewimg from "../../images/preview.svg";
import Play from "../../images/play.svg";
import watchlist from "../../images/watchlist.svg";
import logo from "../../images/cantiz_connect_logo.svg";

class Preview extends Component {
  movie = this.props.selectedMovie;
  cart = this.props.store;
  containerStyle
  constructor(props) {
    super(props);
    this.containerStyle =   {backgroundImage: `url(${this.movie.preview.poster})`};
  }
  componentDidMount() {
      JsSpatialNavigation.focus();
      document.body.addEventListener('smartremote:RETURN', this.backToMovieList);
  }
    componentWillUnmount() {
        document.body.removeEventListener('smartremote:RETURN', this.backToMovieList);
    }
  play = () => {
    let {history} = this.props;
    history.push({pathname:'/player'});
  }

  backToMovieList = ()  => {
      let {history} = this.props;
      history.push({pathname:'/ott'});
  }

  buy = (movie) => {
    if(movie.readyToPlay) {
      this.play();
      return;
    }
    this.cart.addItem(this.movie);
      let {history} = this.props;
      history.push({pathname:'/purchase'});
}


  render() {
    return (
      <div className="container-fluid ph-0">
        <div className="previewcontainer" style={this.containerStyle}>
          <div className="container">
            <div className="mainlogo pabs">
              <img src={logo}  alt={"logo"}/>
            </div>
            <div className="tophead previewhead">
              <h2 className="ma-0">{this.movie.title}</h2>
              <div className="previewdet">
                <p>
                  <span>{this.movie.grade}</span> <span className="pdivision">|</span>
                  <span>{this.movie.year}</span> <span className="pdivision">|</span>
                  <span>{this.movie.runningTime}</span> <span className="pdivision">|</span>
                  <span>{this.movie.genre}</span>
                </p>
              </div>
              <p className="previewdesc">
                  {this.movie.description}
              </p>
              <div className="prev-actions">
                <Focusable className="prev-options" onClickEnter={this.play}>
                  <img src={previewimg} />
                  <h5>Preview</h5>
                </Focusable>
                <Focusable className="prev-options" onClickEnter={this.buy}>
                  <img src={Play} />
                        <h5>{ !this.movie.isPurchased ? `Watch for ${this.movie.price}` : 'Watch'} </h5>


                </Focusable>
                {/*<Focusable className="prev-options resumebtn">*/}
                  {/*<img src={Play} />*/}
                  {/*<h5>Resume</h5>*/}
                  {/*<div className="resumeprogress">*/}
                    {/*<div className="currentProgress" />*/}
                  {/*</div>*/}
                {/*</Focusable>*/}
                <Focusable className="prev-options">
                  <img src={watchlist} />
                  <h5>Watchlist</h5>
                </Focusable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
