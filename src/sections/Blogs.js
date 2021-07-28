import React from 'react';
import Container from 'react-bootstrap/Container';

import Hero from '../components/Hero';
import Content from '../components/Content';

// NOTE :- Can use cards here 

function Blogs (props) {
  return (
    <div id = "blogs">
			<Container fluid = {true} >
				<Hero title = {props.title} text = {props.text} />
					<Content>
						
							<ul>
								<li>
									<h5>
										Fantasy Premier League 19/20, a review - Part 1, Basics  :-  
										<a href="https://medium.com/@2017csb1079/fantasy-premier-league-19-20-a-review-part-1-basics-167e610e229">Read Here</a> 
									</h5>
								</li>
							</ul>
						
					</Content>
				<Container fluid={true} className = "py-4"></Container>
			</Container>
		</div>
  );
}

export default Blogs;