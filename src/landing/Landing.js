import React, { Component } from "react";
import Container from "./common/Container";
import {observer} from "mobx-react";
class Landing extends Component {

   landingState = this.props.store;

    onNavTileFocus = (banner) => {
        if(!this.landingState.isService) {
            this.landingState.setBanner(banner);
        }
   }
    onNavTileEnter = (menu) => {
        this.landingState.setFocusElement(`.${menu}`)
        let { history } = this.props;
        history.push({
            pathname: `/${menu}`,
        });
    }
  render() {
    return (
      <Container defaultFocus={this.landingState.defaultFocusElement}
                 description={this.landingState.description}
                 title={this.landingState.title}
                 services={this.landingState.isService}
                 bgStyle={this.landingState.backgroundStyle}
                 tiles={this.landingState.tiles}
                 qr={true}
                 onFocus={this.onNavTileFocus}
                 onEnter= {this.onNavTileEnter}/>
    );
  }
};

export default observer(Landing);
