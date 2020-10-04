import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "yellow"],
    };
  }
  showColor(color) {
    return {
      backgroundColor: color,
    };
  }
  setActiveColor(color) {
    this.props.onReceiveColor(color);
  }
  render() {
    var elementColors = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => this.setActiveColor(color)}
        ></span>
      );
    });
    return (
      <div className="col-sm-6">
        <div className="card mt-5">
          <div className="card-header bg-primary text-white">ColorPicker</div>
          <div className="card-body">
            {elementColors}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
