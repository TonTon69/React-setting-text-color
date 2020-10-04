import React, { Component } from "react";

class SizeSetting extends Component {
  changeSize(value) {
    this.props.onChangeSize(value);
  }
  render() {
    return (
      <div className="card mt-5">
        <div className="card-header">Size: {this.props.fontSize}px</div>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-success float-left mr-2"
            onClick={() => this.changeSize(-2)}
          >
            Giảm
          </button>
          <button
            type="button"
            className="btn btn-success float-left"
            onClick={() => this.changeSize(2)}
          >
            Tăng
          </button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
