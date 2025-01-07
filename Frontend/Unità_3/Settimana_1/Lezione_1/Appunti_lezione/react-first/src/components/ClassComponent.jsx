/* eslint-disable react/prop-types */
import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h3>Componente a classe.</h3>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default ClassComponent;
