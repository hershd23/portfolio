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
        title: 'Skills and Achievements',
        text : 'A pretty dynamic list of my skills and achievements. Will grow as I keep learning!'
      },
      contact:{
        title: 'Socials',
        text : 'Here are the places to find me or my work. Reach out to me for opportunities or all things tech, sports or politics!'
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
                <p>Hi, I am Hersh. I am interested in all things tech, sports and politics. I am currently exploring developing mobile applications in flutter and AI in sports. Here is a summary of my experience and POR's</p>
                <b>Work Experience</b>
                  <ul>
                    <li>Software Engineering Intern :- <b>D.E. Shaw and Co (Apr-May 2020)</b></li>
                    <li>Research Intern (NLP) :- <b>IIT Kharagpur (May-Jun 2019)</b></li>
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

              <Row>

							<Col sm = {6}>
							<center>
							<h3> Skills </h3>
							</center>
              <Content>
                <p><b>Programming Languages :- </b> C, C++, Java, JavaScript, Python, Dart</p>
                <p><b>Frameworks and Libraries :- </b>Pytorch, Tensorflow, ReactJS,  Django, Pandas, Numpy, Scipy, Sklearn, Matplotlib, OpenFace, Keras, Fast-Ai </p>
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
              
              </Row>
            </Container>
          </div>

          <div id = "contact">
            <Container fluid = {true} className = "bg-light">
              <Hero title = {this.state.contact.title} text = {this.state.contact.text} />
							<div className = "social-links">
								<center>
									<a href="https://www.linkedin.com/in/hersh-dhillon/" rel="noopener noreferrer" target="_blank">
											<i className="fa fa-linkedin-square"  aria-hidden="true"/>
									</a>
								
									<a href="mailto:hershdhillon23@gmail.com" rel="noopener noreferrer" target="_blank">
											<i className="fa fa-envelope-square"  aria-hidden="true"/>
									</a>

									<a href="https://github.com/hershd23" rel="noopener noreferrer" target="_blank">
										<i class="fa fa-github-square" aria-hidden="true"></i>
									</a>

									<a href="https://twitter.com/DhillonHersh" rel="noopener noreferrer" target="_blank">
										<i class="fa fa-twitter-square" aria-hidden="true"></i>
									</a>

								</center>
							</div>
							<Container fluid={true} className = "py-4"></Container>
            </Container>
          </div>


      	  <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
