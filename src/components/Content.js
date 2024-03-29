import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Content(props) {
  return (
    <Container className="contentContainer" fluid={true}>
      <Row className="justify-content-center">
        <Col md={10}>{props.children}</Col>
      </Row>
    </Container>
  );
}

export default Content;
