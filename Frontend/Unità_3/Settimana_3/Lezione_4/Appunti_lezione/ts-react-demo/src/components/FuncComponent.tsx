import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";

interface FuncComponentProps {
  title: string;
  counter?: number;
}

interface Movie {
  title: string;
  year: number;
  id: number;
}

function FuncComponent(props: FuncComponentProps) {
  const [show, setShow] = useState(false);
  const [movieObject, setMovieObject] = useState<null | Movie>(null);

  useEffect(() => {
    console.log("Mountin");
    setMovieObject({ title: "BATMAN", year: 1960, id: 4234324 });
  }, []);

  return (
    <div>
      <h2>Componente a funzione!</h2>
      <h3>Valore prop: {props.title}</h3>
      <Button
        variant="success"
        onClick={() => {
          setShow(!show);
        }}
      >
        TOGGLE
      </Button>
      {show && <Alert variant="info">Show è true!</Alert>}
      <div>
        <h4>{movieObject?.title}</h4>
      </div>
    </div>
  );
}

export default FuncComponent;
