import React, { Component } from "react";
import "./LocalAttraction.css";
import {
  Focusable,
  FocusableSection,
  JsSpatialNavigation
} from "react-js-spatial-navigation";
import ListItem from "./list-item/ListItem";
import logo from "../images/logo_caeigo.svg";
import { observer } from "mobx-react/index";

class LocalAttractions extends Component {
    laState = this.props.store;
    componentDidMount() {
        document.body.addEventListener('smartremote:RETURN', this.resetState);
        //this.laState.isLaActive ? JsSpatialNavigation.focus() : JsSpatialNavigation.focus('.gift');
        if (this.laState.selectedItem) {
            JsSpatialNavigation.focus(`.item-${this.laState.selectedItem.id}`);
        } else {
            JsSpatialNavigation.focus(".item-1");
            this.laState.setAttractions();
        }
    }

    componentWillUnmount() {
        document.body.removeEventListener('smartremote:RETURN', this.resetState);
    }

    resetState = () => {
        let { history } = this.props;
        this.laState.resetSelectedItems();
        history.push({pathname:'/'});
    };

    selectLocalAttractions = () => {
        JsSpatialNavigation.focus(".item-1");
        if (!this.laState.isLaActive) {
            this.laState.setAttractions();
        }
    };

    selectGiftStore = () => {
        JsSpatialNavigation.focus(".item-1");
        if (this.laState.isLaActive) {
            this.laState.setGifts();
        }
    };

    buy = item => {
        this.laState.selectGiftItem(item);
        let { history } = this.props;
        history.push({
            pathname: `/purchase`
        });
        return;
    };

    render() {
        return (
            <div className="container-fluid ph-0">
                <div className="localcontainer">
                    <div className="sidebarmenu">
                        <div className="mainlogo">{<img src={logo} alt={"logo"} />}</div>
                        <div className="sidenav">
                            <FocusableSection
                                defaultElement=".first"
                                enterTo="default-element"
                            >
                                <Focusable
                                    className="focusable first"
                                    onClickEnter={this.selectLocalAttractions}
                                >
                                    <div
                                        className={
                                            this.laState.isLaActive
                                                ? "sidenavmenu active"
                                                : "sidenavmenu"
                                        }
                                    >
                                        Local Attractions
                                    </div>
                                </Focusable>
                                <Focusable
                                    className="focusable gift"
                                    onClickEnter={this.selectGiftStore}
                                >
                                    <div
                                        className={
                                            !this.laState.isLaActive
                                                ? "sidenavmenu active"
                                                : "sidenavmenu"
                                        }
                                    >
                                        Souvenir Shop
                                    </div>
                                </Focusable>
                            </FocusableSection>
                        </div>
                    </div>
                    <div className="localdata">
                        <h2>{this.laState.title}</h2>
                        {this.laState.description && (
                            <p className="souvenirsdesc">{this.laState.description}</p>
                        )}
                        <div className="listitemdiv">
                            <FocusableSection enterTo="last-focused">
                                {this.laState.items.map((item, i) => (
                                    <ListItem item={item} key={i} onBuy={this.buy} />
                                ))}
                            </FocusableSection>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default observer(LocalAttractions);
