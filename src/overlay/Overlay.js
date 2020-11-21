import React, { Component } from "react";
import "./Overlay.css";
import Bills from "./bill/Bills";
import Confirmation from "./confirmation/Confirmation";

class Overlay extends Component {

   backToServices = () => {
       let { history } = this.props;
       this.props.store.resetFocusElement('.bill')
       history.push({
           pathname: `/services`,
       });
   }

  render() {
      const isConfirmation  = this.props.isConfirmation;
      let content ;
      if (isConfirmation) {
        content =  <Confirmation title={this.props.service.title}
                        messages={this.props.service.messages}
                        icon={this.props.service.icon}
                        onConfirmation={this.props.onConfirmation}/>
      } else {
              content =  <Bills onConfirmation={this.backToServices}/>
      }

    return (
      <div className="modal-overlay ph-0">
        <div className="modal-content">
            {content}
        </div>
      </div>
    );
  }
}

export default Overlay;
