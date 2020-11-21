import React, { Component } from "react";
import "./confirmation.css";

class Confirmation extends Component {
  componentDidMount() {
      //since we are overwrite default settimeout  function.
      window._setTimeout(function() {
          this.props.onConfirmation();
      }.bind(this), 1500)
  }
  render() {
    return (
        <div className="blur-container confirmation-container">
            <div className="billicon">
                {this.props.icon && (<img src={require(`../../images/${this.props.icon}`)}  alt={"iconS"}/>)}
                {this.props.title && (
                    <h5>{this.props.title}</h5>
                )}
                {this.props.messages.map( (message, i) => <p key={i}>{message}</p>)}
            </div>
        </div>
    );
  }
}

export default Confirmation;
