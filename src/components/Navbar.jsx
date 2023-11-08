import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: "auto" }}>
            <LinkContainer to="/">
              <Nav.Link>
                <h4>Job Board</h4>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/metrics">
              <Nav.Link>
                <h4 className="ml-5">Metrics</h4>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/map">
              <Nav.Link>
                <h4>Map</h4>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacts">
              <Nav.Link>
                <h4>Contacts</h4>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
