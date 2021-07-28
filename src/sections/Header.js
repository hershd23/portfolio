import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import resume from '../assets/resume/Hersh_Dhillon_2021_Resume.pdf';

/*
NOTE :- Could do something to check if a particular object 
        is declared then only display it's header but seems an overkill
*/

function Header (props) {
  return (
    <Navbar className = "border-bottom sticky-top " bg = "dark" variant = "dark" expand="lg">
      <Navbar.Brand>Hersh Dhillon</Navbar.Brand>

      <Navbar.Toggle className = "border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className = "ml-auto">
          <Link smooth className="nav-link" to="/portfolio#home">Home</Link>
          <Link smooth className="nav-link" to='/portfolio#about'>About</Link>
          <Link smooth className="nav-link" to='/portfolio#experiences'>Experiences</Link>
          <Link smooth className="nav-link" to='/portfolio#projects'>Projects</Link>
          <Link smooth className="nav-link" to='/portfolio#skills'>Skills</Link>
          <Link smooth className="nav-link" to='/portfolio#blogs'>Blogs</Link>
          <Link smooth className="nav-link" to='/portfolio#contact'>Contact</Link>
          {/* nav-link is merely a CSS style */}
          <a href={resume} className='nav-link' target="_blank" rel="noopener noreferrer" style={{color: "white"}}>Resume</a>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;