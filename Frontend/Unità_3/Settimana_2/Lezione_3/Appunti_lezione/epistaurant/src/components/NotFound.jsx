import { useNavigate } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Alert className="text-center bg-danger">
      <h3>404 - NOT FOUND</h3>
      <Button
        variant="primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Homepage
      </Button>
    </Alert>
  );
}

export default NotFound;
