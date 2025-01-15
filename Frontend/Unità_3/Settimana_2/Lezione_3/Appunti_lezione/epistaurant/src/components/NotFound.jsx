import { Alert, Button } from "react-bootstrap";

function NotFound() {
  return (
    <Alert className="text-center bg-danger">
      <h3>404 - NOT FOUND</h3>
      <Button variant="primary">Homepage</Button>
    </Alert>
  );
}

export default NotFound;
