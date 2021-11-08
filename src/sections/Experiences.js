import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import Hero from "../components/Hero";
import OrgTab from "../components/OrgTab";

// Could easily be implemented as a stateless component
class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      text: props.text,
      items: [
        {
          id: "flipkart",
          org: "Flipkart",
          role: "Software Development Engineer 1",
          duration: "June 2021 - Present",
          link: "https://flipkart.com",
          description: [
            {
              text: " I work as an SDE 1 in the IAAS DCIM team in Central Platforms Group at Flipkart.",
            },
            {
              text: " Currently working on improving Infrastructure Asset Management and Monitoring for Flipkart Cloud Platform.",
            },
          ],
        },
        {
          id: "openmined",
          org: "OpenMined",
          role: "Core Dev Cognition Engineering and Technical Mentor",
          duration: "August 2020 - May 2021",
          link: "https://flipkart.com",
          description: [
            {
              text: " Active Contributor and Team NLP Member of OpenMined’s SyferText, a Federated Learning library for NLP built on top of PySyft",
            },
            {
              text: " Worked as a Technical Mentor for the Private AI course series",
            },
            {
              text: " Mentoring responsibilites included doubt resolution and grading course projects.",
            },
            { text: " Tech Stack :- Python, Pytorch, Pysyft" },
          ],
        },
        {
          id: "infurnia",
          org: "Infurnia",
          role: "Software Engineering Intern",
          duration: "Janurary 2021 - May 2021",
          link: "https://flipkart.com",
          description: [
            {
              text: " Developed desktop design application for Infurnia from scratch. This involved",
            },
            {
              text: " Experimenting with various libraries and frameworks and generating Proof of Concepts",
            },
            {
              text: " Integrating the in-house graphics engines (2D and 3D) into the application.",
            },
            {
              text: " Building new components from scratch like nested accordion and dynamic tabs, inspired from modern web frameworks.",
            },
            { text: " Tech Stack :- C++, MFC, Win32, Vulkan, Cairo" },
          ],
        },
        {
          id: "deshaw",
          org: "D.E. Shaw Group",
          role: "Software Engineering Intern",
          duration: "April 2020 - June 2020",
          link: "https://flipkart.com",
          description: [
            {
              text: " Built a rich text editor for LiveDesign. A product of their partner company Schrodinger.",
            },
            {
              text: " This was used to be as a collaborative tool in their Forms Annotation Gadget.",
            },
            {
              text: " Persisted the text and image files thorugh in-house File Store service",
            },
            { text: " Tech Stack :- ReactJS, Java, Hibernate" },
          ],
        },
        {
          id: "cnerg",
          org: "CNERG Lab, IIT Kharagpur",
          role: "Research Intern, Guide - Dr. Pawan Goyal",
          duration: "May 2019 - July 2019",
          link: "https://flipkart.com",
          description: [
            {
              text: " Implemented the Collaborative Adversarial Network architecture (Chen et al ACM-2019).",
            },
            {
              text: " The aim was to use this sentence similarity prediction network to answer product queries on e-commerce websites.",
            },
            { text: " Tech Stack :- Python, Pytorch, NLTk" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div id="experiences">
        <Container fluid={true} className=" bg-light">
          <Hero title={this.state.title} text={this.state.text} />

          <Row className="justify-content-center">
            <Col md={10}>
              <Tab.Container
                className="mx-5"
                id="left-tabs-example"
                defaultActiveKey={this.state.items[0].id}
              >
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      {this.state.items.map((item) => (
                        <Nav.Item>
                          <Nav.Link eventKey={item.id}>{item.org}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      {this.state.items.map((item) => (
                        <Tab.Pane eventKey={item.id}>
                          <OrgTab item={item} />
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>

          {/* Place holder conatainers to provide some padding*/}
          <Container fluid={true} className="py-4"></Container>
        </Container>
      </div>
    );
  }
}

export default Experiences;
