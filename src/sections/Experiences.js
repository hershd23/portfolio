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
          id: "GT Database Lab",
          org: "GT Database Lab",
          role: "Member GT Database Lab (EvaDB)",
          duration: "August 2023 - Present",
          link: "https://github.com/georgia-tech-db/evadb",
          description: [
            {
              text: " Working on EvaDB[LINK] a database to build AI applications with just a few lines of code, under Prof. Joy Arulraj.",
            },
            {
              text: "Recognized for my contributions to the 0.3.4 release[LINK] by rewriting the parser implementation for custom functions in EvaDB. " 
            },
            {
              text: "esigned and developed configuration management in EvaDB to resemble the SQL config operations supported by open-source DBs like postgres.",
            },
          ],
        },
        {
          id: "flipkart",
          org: "Flipkart",
          role: "Software Development Engineer 2 - IAAS",
          duration: "June 2021 - August 2023",
          link: "https://flipkart.com",
          description: [
            {
              text: " I work as an SDE 2 in the IAAS (Infrastructure As A Service) team in Central Platforms Group at Flipkart.",
            },
            {
              text: "Led the Asset Management and Reporting project. Designed, developed and maintained the highly available" +
                    "Infra Management stack. This new stack performs up to 4x faster on server onboarding benchmarks. Developed" +
                    "the reporting infrastructure to provide visibility fine-grained visibility into hardware maintenance." +
                    "Developed a Zero-Touch-Provisioning (ZTP) server orchestration service to save on SRE bandwidth which led" +
                    "to a 50x speedup in provisioning for a batch of 1000 servers. Designed and implemented automatic workflows" +
                    "for Network Attached Storage devices for the ZTP service. Performed on-call duties for IaaS and the whole of" +
                    "FK cloud. Mentored project interns and received an Exceeds Expectations rating in both the performance" +
                    "reviews and got promoted to the SWE-II level.",
            },
            {
              text: "I have performed oncall duties for the IAAS team, resolving capacity and compute issues for teams at Flipkart.",
            },
          ],
        },
        {
          id: "layer5",
          org: "Layer5",
          role: "Open Source Collaborator",
          duration: "December 2021 - Present",
          link: "https://layer5.io/",
          description: [
            {
              text: " Active Contributor to Meshery and Service Mesh Performance projects",
            },
            {
              text: "Built Helm charts for the deployment of the Cilium Service Mesh with Meshery as the management plane",
            },
            {
              text: "Helped build Docker Desktop Extension for Meshery where the application runs and serves Service Meshes"+
               "inside of the Docker Desktop Linux VM. ",
            },
            {
              text: "Helped create the Service Mesh Performance reusable action for Self-Hosted runners" +
              "(personal servers instead of github runners) to test performance of various Service meshes on load tests",
            },
            { text: " Tech Stack :- Docker, Kubernetes, Helm, Go, Github Actions" },
          ],
        },
        {
          id: "openmined",
          org: "OpenMined",
          role: "Core Dev Cognition Engineering and Technical Mentor",
          duration: "August 2020 - May 2021",
          link: "https://github.com/OpenMined",
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
          link: "https://www.infurnia.com/",
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
          link: "https://www.deshawindia.com/",
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
          link: "https://cnerg-iitkgp.github.io/",
          description: [
            {
              text: " Implemented the Collaborative Adversarial Network architecture (Chen et al ACM-2019).",
            },
            {
              text: " The aim was to use this sentence similarity prediction network to answer product queries on e-commerce websites." +
              "The model achieved 72% accuracy on the self curated product question-answering dataset made from extracting data from the" +
              "queries section of Flipkart",
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
