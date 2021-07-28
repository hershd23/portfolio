import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './App.css';

import Header from './sections/Header'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects';
import Skills from './sections/Skills'
import Blogs from './sections/Blogs'
import Contact from './sections/Contact'
import Footer from './sections/Footer';
import Experiences from './sections/Experiences';


class App extends React.Component {

  // Create a main object with headings and some meta text
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hersh Dhillon',
      home:{
        pretitle: 'Hi, I am',
        title: 'Hersh Dhillon,',
        subTitle: 'Software Development Engineer I at Flipkart',
        text: "Currently focussing on Devops, Cloud Systems and Privacy Preserving AI."
      },
      about:{
        title: 'About Me'
      },
      experiences: {
        title: 'Experiences',
        text: 'Places where I have worked'
      },
      projects: {
        title: 'My Projects',
        text : 'Here are my projects!'
      },
      skills:{
        title: 'Skills and Awards',
        text : 'A pretty dynamic list of my skills and achievements. Will grow as I keep learning!'
      },
      blogs:{
        title: 'Blogs and Talks',
        text : 'It sorta rhymed in my head'
      },
      contact:{
        title: 'Contact Me',
        text : 'Here are the places to find me or my work. Reach out to me for freelance opportunities or all things tech, sports or politics!'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className = "p-0" fluid = {true}>
          
          {/* <Navbar className = "border-bottom sticky-top " bg = "dark" variant = "dark" expand="lg">
            <Navbar.Brand>Hersh Dhillon</Navbar.Brand>

            <Navbar.Toggle className = "border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className = "ml-auto">
                <Link smooth className="nav-link" to="/portfolio#home">Home</Link>
                <Link smooth className="nav-link" to='/portfolio#about'>About</Link>
                <Link smooth className="nav-link" to='/portfolio#projects'>Projects</Link>
                <Link smooth className="nav-link" to='/portfolio#skills'>Skills</Link>
                <Link smooth className="nav-link" to='/portfolio#blogs'>Blogs</Link>
                <Link smooth className="nav-link" to='/portfolio#contact'>Contact</Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar> */}

          <Header />

          <Home 
            pretitle = {this.state.home.pretitle} 
            title = {this.state.home.title}
            subTitle = {this.state.home.subTitle}
            text = {this.state.home.text}
          />

          <About 
            title = {this.state.about.title}
          />

          <Experiences
            title = {this.state.experiences.title}
            text = {this.state.experiences.text}
          />

          <Projects 
            title = {this.state.projects.title} 
            text = {this.state.projects.text}
          />

          
          <Skills 
            title = {this.state.skills.title}
            text = {this.state.skills.text}
          />

          <Blogs 
            title = {this.state.blogs.title}
            text = {this.state.blogs.text}
          />

          <Contact 
            title = {this.state.contact.title}
            text = {this.state.contact.text}
          />

      	  <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
