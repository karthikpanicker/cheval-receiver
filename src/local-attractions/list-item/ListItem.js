import React, { Component } from "react";
import "./ListItem.css";
import { Focusable } from "react-js-spatial-navigation";

class ListItem extends Component {
    state = {
        isFocused: false
    }
    constructor( props ){
        super( props );
        this.onItemFocus = this.onItemFocus.bind(this);
        this.onItemFocusOut = this.onItemFocusOut.bind(this);
    }
    onItemFocus  = () => {
        this.setState({isFocused:true});
    }
    onItemFocusOut  = () => {
        this.setState({isFocused:false});
    }

  onItemSelect = event => {
    if (!this.props.item.buyable) {
      return;
    }
    this.props.onBuy(this.props.item);
  };
  render() {
    return (
      <div className="locallistitem">
          <Focusable
              className={"focusableContent item-"+ this.props.item.id}
              onFocus={this.onItemFocus}
              onUnfocus={this.onItemFocusOut}
              onClickEnter={this.onItemSelect}
             >
              <div className="localbox">
                  <div className="localimg">{<img src={this.props.item.image} alt="location image"/>}</div>
                  <div className="localcontent">
                      {this.props.item.sponsored && (
                          <span className="localstatus">Sponsored</span>
                      )}
                      <h4>{this.props.item.title}</h4>
                      {this.props.item.price && (
                          <span className="pricetag">{this.props.item.price}</span>
                      )}
                      <p className={!this.props.item.buyable ? "ladesc" : ""}>
                          {this.props.item.description}
                      </p>
                  </div>
                  {(this.props.item.buyable &&this.state.isFocused) && (
                      <button className="btn-buy">BUY NOW</button>
                  )}
              </div>
          </Focusable>
      </div>
    );
  }
}

export default ListItem;
