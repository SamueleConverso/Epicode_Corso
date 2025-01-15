import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function RestaurantNavbar() {
  const location = useLocation();
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
        <Container fluid={true}>
          <Link to="/" className="navbar-brand">
            Epistaurant
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/menu"
                className={
                  location.pathname === "/menu" ? "nav-link active" : "nav-link"
                }
              >
                Menu
              </Link>
              <Link
                to="/prenota"
                className={
                  location.pathname === "/prenota"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Prenota
              </Link>
              <Link
                to="/admin"
                className={
                  location.pathname === "/admin"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Admin
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default RestaurantNavbar;
