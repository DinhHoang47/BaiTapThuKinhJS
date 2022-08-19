import React, { Component } from "react";
import { glassesData } from "./dataGlasses";
import Glass_List from "./Glass_List";
import Model_Card from "./Model_Card";

class ExGlassStore extends Component {
  state = {
    glassArr: glassesData,
    wearingGlass: {},
  };
  tryThisGlass = (glass) => {
    this.setState({ wearingGlass: glass });
  };
  render() {
    return (
      <div className="container vglasses py-3">
        <div className="row justify-content-between">
          <div className="col-6 vglasses__left">
            <div className="row">
              <div className="col-12 ">
                <h1 className="mb-2 text-primary">Try Glass App</h1>
              </div>
            </div>
            <div className="row" id="vglassesList">
              <Glass_List
                tryThisGlass={this.tryThisGlass}
                data={this.state.glassArr}
              />
            </div>
          </div>
          <div className="col-5 vglasses__right p-0">
            <Model_Card wearingGlass={this.state.wearingGlass} />
          </div>
        </div>
      </div>
    );
  }
}

export default ExGlassStore;
