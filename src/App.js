import React, { Component } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SzeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ColorPicker />
          <div className="col-sm-6">
            <SizeSetting />
            <Reset />
          </div>
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
