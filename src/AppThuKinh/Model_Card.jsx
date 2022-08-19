import React, { Component } from "react";

class Model_Card extends Component {
  renderWearingGlass = () => {
    if (Object.keys(this.props.wearingGlass).length !== 0) {
      return <img src={this.props.wearingGlass.url} alt=""></img>;
    } else {
      return "";
    }
  };
  renderWearingGlassInfo = () => {
    if (Object.keys(this.props.wearingGlass).length !== 0) {
      return (
        <div>
          <h4>{this.props.wearingGlass.name}</h4>
          <div className="btn btn-danger btn-sm">
            {this.props.wearingGlass.price + "$"}
          </div>
          <span className="text-success">Stocking</span>
          <p className="mt-2">{this.props.wearingGlass.desc}</p>
        </div>
      );
    } else {
      return "";
    }
  };
  render() {
    return (
      <div className="vglasses__card ">
        <div className="vglasses__model" id="avatar">
          <this.renderWearingGlass />
        </div>
        <div id="glassesInfo" className="vglasses__info">
          <this.renderWearingGlassInfo />
        </div>
      </div>
    );
  }
}

export default Model_Card;
