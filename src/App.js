import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './App.css';

import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Footer from './components/Footer';

import profile from './assets/images/profile.jpeg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Hersh Dhillon',
      home:{
        pretitle: 'Hi, I am',
        title: 'Hersh Dhillon,',
        subTitle: 'a Pre-final year Computer Science undergraduate at IIT Ropar',
        text: "I know Deep Learning, Computer Vision, Natural Language Processing, Web and Mobile app development. I write and speak too!"
      },
      about:{
        title: 'About Me'
      },
      projects: {
        title: 'My Projects',
        text : 'Have a look at my projects. Click on a card to reveal more information.'
      },
      skills:{
        title: 'Skills',
        text : 'A pretty dynamic list of my skills. Will grow as I keep learning!'
      },
      contact:{
        title: 'Lets talk'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className = "p-0" fluid = {true}>
          
          <Navbar className = "border-bottom sticky-top " bg = "dark" variant = "dark" expand="lg">
            <Navbar.Brand>Hersh Dhillon</Navbar.Brand>

            <Navbar.Toggle className = "border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className = "ml-auto">
                <Link smooth className="nav-link" to="/portfolio#home">Home</Link>
                <Link smooth className="nav-link" to='/portfolio#projects'>Projects</Link>
                <Link smooth className="nav-link" to='/portfolio#about'>About</Link>
                <Link smooth className="nav-link" to='/portfolio#skills'>Skills</Link>
                <Link smooth className="nav-link" to='/portfolio#contact'>Contact</Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <div className = "bg" id = "home">
          <Container fluid = {true} className="p-0 m-0">
            
              <Container fluid={true} className = "py-5"></Container>
              <Container fluid={true} className = "py-5"></Container>
              <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                <Container fluid={true}>
                    <Row className="justify-content-left py-5 px-4">
                        <Col md={8} sm={12}>
        { <h3 className="display-5 font-weight-light text-light">{this.state.home.pretitle}</h3> }
        { <h1 className="display-2 font-weight-bolder text-light">{this.state.home.title}</h1> }
        { <h3 className="display-5 font-weight-light text-light">{this.state.home.subTitle}</h3> }
        { <h3 className="lead font-weight-light text-light">{this.state.home.text}</h3> }
                        </Col>
                    </Row>
                </Container>
              </Jumbotron>
          </Container>
          </div>

          <div id = "projects">
          <Container fluid = {true}>
            <Hero title = {this.state.projects.title} text = {this.state.projects.text}/>
            <Carousel />
          </Container>
          </div>
          
          <div id = "about">
          <Container fluid = {true} className=" bg-light">
            <Hero title = {this.state.about.title} />
            <Row>
            <Col sm = {4}>
              <Image className = "profile-image" src = {profile} thumbnail/>
            </Col>
            <Col sm = {8}>
            <Content>
                <p>Hi I am a pre-final year undergraduate at Indian Institute of Technology(IIT) Ropar</p>
                <b>Work Experience</b>
                  <ul>
                    <li>Software Engineering Intern :- <b>D.E. Shaw and Co (Apr-May 2020)</b></li>
                    <li>Research Intern :- <b>IIT Kharagpur (May-Jun 2019)</b></li>
                  </ul>

                <b>Positions of Responsibility</b>
                  <ul>
                    <li>Current Mentor and Co-Founder :- <b>Debating Society IIT Ropar</b></li>
                    <li>Current Core Team Member :- <b>AI Community IIT Ropar</b></li>
                    <li>Former Representative :- <b>Debating Society IIT Ropar</b></li>
                    <li>Former Coordinator :- <b>Coding Club IIT Ropar</b></li>
                  </ul>
            </Content>
            </Col>
            </Row>
            <Container fluid={true} className = "py-5"></Container>
          </Container>
          </div>

          <div id = "skills">
            <Container fluid = {true}>
              <Hero title = {this.state.skills.title} text = {this.state.skills.text}/>
            </Container>
          </div>

          <div id = "contact">
            <Container fluid = {true} className = "bg-light">
              <Hero title = {this.state.contact.title} />
            </Container>
          </div>


          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
