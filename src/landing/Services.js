import React, { Component } from "react";
import Container from "./common/Container"
import Overlay from "../overlay/Overlay"
import {observer} from "mobx-react/index";

class Services extends Component {
    serviceState = this.props.store;
    onServiceFocus = () => {

    }

    componentDidMount() {
        document.body.addEventListener('smartremote:RETURN',this.resetFocus );
    }

    componentWillUnmount() {
        document.body.removeEventListener("smartremote:RETURN", this.resetFocus);
        this.serviceState.resetFocusElement('.gym');
    }

    resetFocus = (event) => {
        this.serviceState.resetFocusElement('.gym');
    };

    onServiceSelection = (serviceName) => {
        if(serviceName  === 'bill') {
            let { history } = this.props;
            history.push({
                pathname: `/${serviceName}`,
            });
            return;
        }
        this.serviceState.selectService(serviceName);
    }

    onConfirmation = () => {
        this.serviceState.resetOverlay();
    }

    render() {
        return (
            <div>
                    <Container defaultFocus={this.serviceState.defaultFocusElement}
                               description={this.serviceState.description}
                               title={this.serviceState.title}
                               bgStyle={this.serviceState.backgroundStyle}
                               services={this.serviceState.isService}
                               tiles={this.serviceState.services}
                               onFocus={this.onServiceFocus}
                               onEnter= {this.onServiceSelection}/>
                {this.serviceState.isOverlay && (
                    <Overlay service={this.serviceState.selectedService}
                             isConfirmation={true}
                             onConfirmation={this.onConfirmation}/>
                )}
            </div>
    );
    }
}

export default observer(Services);