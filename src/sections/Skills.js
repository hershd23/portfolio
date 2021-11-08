import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Hero from "../components/Hero";
import Content from "../components/Content";

function Skills(props) {
  return (
    <div id="skills">
      <Container fluid={true} className=" bg-light">
        <Hero title={props.title} text={props.text} />
        {/* <Row>
					<Col sm = {6}>
						<center>
							<h3> Skills </h3>
						</center>
						<Content>
							<p><b>Programming Languages :- </b> C, C++, Java, JavaScript, Python, Dart</p>
							<p><b>Frameworks and Libraries :- </b>Pytorch, Tensorflow, ReactJS, Django, Pandas, Numpy, Scipy, Sklearn, Matplotlib, OpenFace, Keras, Fast-Ai, PostgreSQL </p>
							<br />
						</Content>
					</Col>

				<Col sm = {6}>
					<center>
						<h3> Achievements </h3>
					</center>
					<Content>
						<p><b>JEE Advanced 2017 :- </b> All India Rank 1760 (1.3 million candidates)</p>
						<p><b>KVPY 2017 :- </b> All India Rank 232 (0.3 million candidates)</p>
						<p><b>Flipkart Grid Challenge :- </b> Rank 121 out of 6700 teams</p>
						<p><b>Debating :- </b> Novice Finalist at SRCC annual debate, Three breaks as an adjudicator (Classify as A-level)</p>
					</Content>
				</Col>
				
				</Row> */}
        <Container>
          <Row xs={1} md={2}>
            <Col>
              <Card>
                <Card.Header>
                  <h5>Programming Languages</h5>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <b>Expert</b>
                    <li>C, C++, Python, JavaScript</li>
                    <br />
                    <b>Intermediate</b>
                    <li>Java, Go</li>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <h5>Machine Learning</h5>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <b>ML Frameworks/Libraries</b>
                    <li>Pytorch, Tensorflow, Sklearn, Scipy, FastAI</li>
                    <br />
                    <b>Other Libraries/Tools</b>
                    <li>OpenFace, Pandas, Numpy, Jupyter, OpenCV, NLTk</li>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />

          <Row xs={1} md={2}>
            <Col>
              <Card>
                <Card.Header>
                  <h5>Web/Mobile/Desktop Development</h5>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <b>Web Frontend</b>
                    <li>ReactJS, Vanilla JS+HTML+CSS</li>
                    <br />
                    <b>Mobile/Desktop Frontend</b>
                    <li>Android, Flutter, MFC, Win32</li>
                    <br />
                    <b>Backend</b>
                    <li>Django, SpringBoot, Nginx</li>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Header>
                  <h5>Miscellaneous</h5>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <b>Databases</b>
                    <li>MySQL, PostgreSQL</li>
                    <br />
                    <b>OS</b>
                    <li>Linux(Ubuntu, Debian), Windows, MacOS</li>
                    <br />
                    <b>Other Libraries/Tools</b>
                    <li>Git, Github, Vulkan, Cairo</li>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <br />
          <Row xs={1}>
            <Col>
              <Card>
                <Card.Header>
                  <h5>Achievements</h5>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p>
                      <b>JEE Advanced 2017 :- </b> All India Rank 1760 (1.3
                      million candidates)
                    </p>
                    <p>
                      <b>KVPY 2017 :- </b> All India Rank 232 (0.3 million
                      candidates)
                    </p>
                    <p>
                      <b>Debating Speaker :- </b> Novice Finalist at SRCC annual
                      debate
                    </p>
                    <p>
                      <b>Debating Adjudicator :- </b> Three breaks as an
                      adjudicator (Classify as A-level)
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* Place holder conatainers to provide some padding*/}
        <Container fluid={true} className="py-4"></Container>
      </Container>
    </div>
  );
}

export default Skills;
