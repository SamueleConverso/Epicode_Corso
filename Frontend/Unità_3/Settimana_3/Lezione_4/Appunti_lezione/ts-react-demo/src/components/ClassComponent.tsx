import { Component } from "react";

interface ClassComponentProps {
  title: string;
  counter?: number;
}

class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return (
      <div>
        <h1>Componente a classe!</h1>
        <h3>Valore prop: {this.props.title}</h3>
      </div>
    );
  }
}

export default ClassComponent;
