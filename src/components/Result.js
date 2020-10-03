import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>Color: red --- Font-size: 15px</p>
        <div style={{ border: "3px solid black", padding: "5px 10px" }}>
          Nội dung setting
        </div>
      </div>
    );
  }
}

export default Result;
