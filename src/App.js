import React, { Component } from "react";
import "./App.css";
import Landing from "./landing/Landing";
import About from "./about/About";
import LocalAttractions from "./local-attractions/LocalAttractions";
import Overlay from "./overlay/Overlay";
import Ott from "./ott/Ott";
import Services from "./landing/Services";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import landingStore from "./strores/landingStateStore"
import servicesStore from "./strores/servicesStore"
import localAttractionStore from "./strores/localAttractionStore";
import cartStore from "./strores/cartStore";
import ottStore from "./strores/ottStore";
import Purchase from "./overlay/purchase/Purchase";
import Preview from "./ott/preview/Preview";
import Player from "./ott/entertainment/player/Player";

class App extends Component {
  componentDidMount() {
      let { history } = this.props;
      document.body.addEventListener('smartremote:RETURN', (event) => {
          if(window.location.pathname === '/la' || window.location.pathname === '/preview' || window.location.pathname === '/ott') {
              return;
          }
          if(window.location.pathname === '/services') {
              history.push({pathname:'/'});
          }
          if(window.location.pathname !== '/') {
              history.goBack();

          }
          return;
      });

  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => <Landing {...props} store={landingStore} />}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/la" render={(props) => <LocalAttractions {...props} store={localAttractionStore}/>}/>
          <Route exact path="/purchase" render={(props) => <Purchase {...props} store={cartStore}/>}/>
          <Route exact path="/services" render={(props) => <Services {...props} store={servicesStore} />} />
          <Route exact path="/bill" render={(props) => <Overlay {...props} isConfirmation={false}  store={servicesStore} />}  />
          <Route exact path="/ott" render={(props) => <Ott {...props} store={ottStore}/>} />
          <Route exact path="/preview" render={(props) => <Preview {...props} selectedMovie={ottStore.selectedMovie} store={cartStore}/>} />
          <Route exact path="/player" render={(props) => <Player {...props} store={ottStore}/>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
