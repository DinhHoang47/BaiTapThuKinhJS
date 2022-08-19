import React, { Component } from "react";

class Glass_List extends Component {
  render() {
    return this.props.data.map((item, index) => {
      return (
        <div key={"glass" + index.toString()} className="col-4 glass-item">
          <img
            onClick={() => {
              this.props.tryThisGlass(item);
            }}
            src={item.jpgUrl}
          />
        </div>
      );
    });
  }
}

export default Glass_List;
