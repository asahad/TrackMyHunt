import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{ backgroundColor: "#333", padding: "20px 0", color: "white" }}
    >
      <Container>
        <Row>
          <Col className="text-center">
            <p style={{ fontSize: "22px" }}>
              Copyright &copy; {currentYear} Alhassan Sahad
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
