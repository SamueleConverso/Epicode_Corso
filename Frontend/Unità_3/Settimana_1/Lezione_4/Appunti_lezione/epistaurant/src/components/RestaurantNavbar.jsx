import { Container, Nav, Navbar } from "react-bootstrap";

function RestaurantNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
        <Container fluid={true}>
          <Navbar.Brand href="#home">Epistaurant</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Menu</Nav.Link>
              <Nav.Link href="#pricing">Prenota</Nav.Link>
              <Nav.Link href="#pricing">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default RestaurantNavbar;
