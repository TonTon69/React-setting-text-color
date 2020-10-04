import React, { Component } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 14,
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
  }
  onSetColor(params) {
    this.setState({
      color: params,
    });
  }
  onChangeSize(value) {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value,
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <ColorPicker
            color={this.state.color}
            onReceiveColor={this.onSetColor}
          />
          <div className="col-sm-6">
            <SizeSetting
              fontSize={this.state.fontSize}
              onChangeSize={this.onChangeSize}
            />
            <Reset />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
