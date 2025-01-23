import { Component } from "react";
import { Alert, Button } from "react-bootstrap";

interface ClassComponentProps {
  title: string;
  counter?: number;
}

interface ClassComponentState {
  show: boolean;
  value: string;
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    show: false,
    value: "",
  };

  render() {
    return (
      <div>
        <h1>Componente a classe!</h1>
        <h3>Valore prop: {this.props.title}</h3>
        <Button
          variant="success"
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          TOGGLE
        </Button>
        {this.state.show && <Alert variant="primary">Show è true!</Alert>}
      </div>
    );
  }
}

export default ClassComponent;
