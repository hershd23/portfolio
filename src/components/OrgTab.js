import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/*
	NOTE :-  Can Design the Tech Stack part better
*/
function Card(props) {
  return (
    <Container fluid={true}>
      <Container fluid={true}>
        <Row className="justify-content-center px-1">
          <Col md={12} sm={2}>
            {props.item.org && (
              <a href={props.item.link}><h1 className="display-5 font-weight-normal">{props.item.org}</h1></a>
            )}
            {props.item.role && (
              <h3 className="display-5 font-weight-light">{props.item.role}</h3>
            )}
            {props.item.duration && (
              <h5 className="display-5 font-weight-light">
                {props.item.duration}
              </h5>
            )}
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="py-2">
        <Row className="justify-content-center">
          <Col md={12}>
            <ul>
              {props.item.description &&
                props.item.description.map((desc) => <li> {desc.text} </li>)}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Card;
