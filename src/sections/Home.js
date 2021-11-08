import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

function Home(props) {
  return (
    <div className="bg" id="home">
      <Container fluid={true} className="p-0 m-0">
        {/* Place holder conatainers to provide some padding*/}
        <Container fluid={true} className="py-5"></Container>
        <Container fluid={true} className="py-3"></Container>

        {/* Jumbotron class starts here */}
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
          <Container fluid={true}>
            <Row className="justify-content-left py-5 px-4">
              <Col md={8} sm={12}>
                {
                  <h3 className="display-5 font-weight-light text-light">
                    {props.pretitle}
                  </h3>
                }
                {
                  <h1 className="display-2 font-weight-bolder text-light">
                    {props.title}
                  </h1>
                }
                {
                  <h3 className="display-5 font-weight-light text-light">
                    {props.subTitle}
                  </h3>
                }
                {
                  <h3 className="lead font-weight-light text-light">
                    {props.text}
                  </h3>
                }
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <div
          className="social-links"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="mailto:hershdhillon23@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-envelope-square" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/hersh-dhillon/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          <a
            href="https://github.com/hershd23"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa fa-github-square" aria-hidden="true"></i>
          </a>

          <a
            href="https://twitter.com/DhillonHersh"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Home;
