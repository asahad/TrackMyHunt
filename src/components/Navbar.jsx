//------------------------Navbar Component---------------------------------------------------
// Navbar component derived from the react-bootstrap 
import { Navbar, Nav, Container } from "react-bootstrap";
const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: "auto" }}>
            <Nav.Link href="#header">
              <h4>Job Board</h4>
            </Nav.Link>
            <Nav.Link href="#Skills">
              <h4 className="ml-5">Metrics</h4>
            </Nav.Link>
            <Nav.Link href="#projects">
              <h4>Map</h4>
            </Nav.Link>
            <Nav.Link href="#contact">
              <h4>Contacts</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
