import React, { Component } from "react";

class SizeSetting extends Component {
  render() {
    return (
      <div className="card mt-5">
        <div className="card-header">Size</div>
        <div className="card-body">
          <button type="button" className="btn btn-success float-left mr-2">
            Giảm
          </button>
          <button type="button" className="btn btn-success float-left">
            Tăng
          </button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
