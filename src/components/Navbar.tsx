import { Nav, Container, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarBs
      sticky="top"
      className="shadow-sm mb-3 bg-dark bg-md-primary bg-lg-dark text-md-white text-lg-white"
    >
      <Container>
        <NavbarBs.Brand className="fw-bold text-white text-md-light text-lg-white">
          Movie App
        </NavbarBs.Brand>

        <Nav className="ms-auto">
          <Nav.Link
            to="/"
            as={NavLink}
            className="text-white text-md-light text-lg-white"
          >
            Home
          </Nav.Link>
          <Nav.Link
            to="/favorites"
            as={NavLink}
            className="text-white text-md-light text-lg-white"
          >
            Favorites
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};
