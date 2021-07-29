import React from 'react';
import Container from 'react-bootstrap/Container';

import Hero from '../components/Hero';
import Content from '../components/Content';

function Contact (props) {
  return (
    <div id = "contact">
			<Container fluid = {true} className=" bg-light">
				<Hero title = {props.title} text = {props.text} />
				
				
				<div className = "social-links-dark" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
						<a href="mailto:hershdhillon23@gmail.com" rel="noopener noreferrer" target="_blank">
							<i className="fa fa-envelope-square"  aria-hidden="true"/>
						</a>
						<a href="https://www.linkedin.com/in/hersh-dhillon/" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-linkedin-square"  aria-hidden="true"/>
						</a>

						<a href="https://github.com/hershd23" rel="noopener noreferrer" target="_blank">
							<i class="fa fa-github-square" aria-hidden="true"></i>
						</a>

						<a href="https://twitter.com/DhillonHersh" rel="noopener noreferrer" target="_blank">
							<i class="fa fa-twitter-square" aria-hidden="true"></i>
						</a>

				</div>
				<Container fluid={true} className = "py-4"></Container>
			</Container>
		</div>
  );
}

export default Contact;