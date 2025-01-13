/* eslint-disable react/prop-types */
import { Component } from "react";
import { Button } from "react-bootstrap";

class Click extends Component {
  value = 0;

  render() {
    return (
      <Button
        onClick={() => {
          this.value += 1;
          this.props.clicking(this.value);
        }}
      >
        Click
      </Button>
    );
  }
}

export default Click;
