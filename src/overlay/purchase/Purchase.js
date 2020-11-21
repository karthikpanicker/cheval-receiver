import React, { Component } from "react";
import "./Purchase.css";
import { Focusable, JsSpatialNavigation } from "react-js-spatial-navigation";
import Confirmation from "../confirmation/Confirmation";

class Purchase extends Component {
  store = this.props.store;
  state = { isConfirmed: false };

  constructor(props) {
    super(props);
    this.addToBill = this.addToBill.bind(this);
    this.redeemPoints = this.redeemPoints.bind(this);
  }
  componentDidMount() {
    JsSpatialNavigation.focus(".addToBill");
  }

  cancel = () => {
    let { history } = this.props;
    history.goBack();
  };

  addToBill = () => {
    this.store.addToBill();
    this.setState({ isConfirmed: true });
  };

  redeemPoints = () => {
    this.store.redeemPoints();
    this.setState({ isConfirmed: true });
  };

  onConfirmation = () => {
    let { history } = this.props;
    if (this.store.cartItem.type === 'souvenir') {
        history.push({
            pathname: `/la`
        });
    } else {
      history.push({pathname: 'preview'})
    }

  };
  componentWillUnmount() {
    this.setState({ isConfirmed: false });
  }

  render() {
    return (
      <div className="modal-overlay ph-0">
        <div className="modal-content">
          {!this.state.isConfirmed && (
            <div className="blur-container pcontainer">
              <div className="billicon">
                <h5>Purchase</h5>
                <h6>{this.store.cartItem.title}</h6>
                <p>Expires in 48 hours</p>
              </div>
              <div className="col100 roombill">
                <div className="billbox">
                  <p className="ramt">{this.store.cartItem.price}</p>
                  <Focusable
                    className="addToBill"
                    onClickEnter={this.addToBill}
                  >
                    <button className="btn-primary">Add to my bill</button>
                  </Focusable>
                </div>
                <div className="divider">
                  <p>or</p>
                </div>
                <div className="prel billbox">
                  <p className="ramt">
                    {this.store.cartItem.pricePoints}{" "}
                    <span className="loyalpt">Loyalty points</span>
                  </p>
                  <Focusable
                    className="redeem"
                    onClickEnter={this.redeemPoints}
                  >
                    <button className="btn-primary">Redeem</button>
                  </Focusable>
                  <p className="pmsg">
                    You have {this.store.loyaltyPoints} Loyalty points left
                  </p>
                </div>
              </div>
              <Focusable className="cancel" onClickEnter={this.cancel}>
                <button className="btn-primary">Cancel</button>
              </Focusable>
            </div>
          )}

          {this.state.isConfirmed && (
            <Confirmation
              icon={this.store.cartItem.icon}
              messages={this.store.cartItem.messages}
              title={this.store.cartItem.title}
              onConfirmation={this.onConfirmation}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Purchase;
