import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

	return(
		<footer >
			<Container fluid = {true} className = "bg-light">
				<Row className="border-top justify-content-between p-3">
					<Col className = "p-0" md={3} sm={12}>
							To copy the template click<a href="https://github.com/hershd23/portfolio" rel="noopener noreferrer" target="_blank"> here</a>
					</Col>
					<Col className = "p-0 d-flex justify-content-end " md = {5}>
							Made using ReactJS by Hersh Dhillon.
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;