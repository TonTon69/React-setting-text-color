import React, { Component } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SzeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 15,
    };
    this.onSetColor = this.onSetColor.bind(this);
  }
  onSetColor(params) {
    this.setState({
      color: params,
    });
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
            <SizeSetting />
            <Reset />
          </div>
          <Result color={this.state.color} />
        </div>
      </div>
    );
  }
}

export default App;
