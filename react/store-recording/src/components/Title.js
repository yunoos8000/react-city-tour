import React, { Component } from "react";

class Title extends Component {
  render() {
    const { name, title } = this.props;
    return (
      <div className="row">
        <div className="col-12 max-auto my-2 text-center text-title">
          <h1 className="text-capitalize font-weight-bold">
            {name} <span className="text-blue">{title}</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default Title;
