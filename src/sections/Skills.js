import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '../components/Hero';
import Content from '../components/Content';


function Skills (props) {
  return (
		<div id = "skills">
			<Container fluid = {true} className=" bg-light">
				<Hero title = {props.title} text = {props.text}/>
				<Row>
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
				
				</Row>
				{/* Place holder conatainers to provide some padding*/}
				<Container fluid={true} className = "py-4"></Container>
			</Container>
		</div>
  );
}

export default Skills;