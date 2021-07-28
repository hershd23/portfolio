import React from 'react';
import Container from 'react-bootstrap/Container';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function Projects (props) {
  return (
		<div id = "projects">
			<Container fluid = {true}>
				<Hero title = {props.title} text = {props.text}/>
				<Carousel />
			</Container>
		</div>
  );
}

export default Projects;