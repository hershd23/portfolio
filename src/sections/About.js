import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {HashLink as Link} from 'react-router-hash-link';

import Hero from '../components/Hero';
import Content from '../components/Content';

/*
TODOS :- 
		Add another photo (this time of the face)
		Split Experience into another section
*/

function About (props) {
  return (
    <div id = "about">
			<Container fluid = {true} >
				<Hero title = {props.title} />
				<Row>
					<Content>
						<p>
							Hi, I am Hersh. 
							I recently graduated from <b>Indian Institute of Technology (IIT) Ropar</b>, where I completed my <b>Bachelors in Computer Science and Engineering</b>.
							I completed High School from <b>Delhi Public School R.K. Puram New Delhi</b>.
						</p> 

						<p>
							I like to write and talk and I use this space to write about myself and my other interests, so <b>if you are a recruiter in a hurry :-</b>
							<ul>
								<li><b>My Resume is on the top right</b></li>
								<li>
									<Link smooth to="/portfolio#experiences">Experiences</Link>,&nbsp; 
									<Link smooth to="/portfolio#projects">Projects</Link> and&nbsp; 
									<Link smooth to="/portfolio#skills">Skills </Link>
									are probably the sections you would be the most interested in</li>
							</ul>
						</p>

						<p>
							So back to what I like
						</p>
						<p>
							I am interested in all things tech, sports and politics (worked up some interest in finance and stock markets too) and I love exploring things. 
							Throughout my college journey I have explored Machine Learning, Deep Learning, Web and Mobile application Development and Desktop application development.
							The problems I am currently focused upon are those of <b>Privacy Preserving Artificial Intelligence</b> and <b>Managing and Monitoring Infrastructure</b>.
						</p>

						<p>
							I am a huge football fan and I support <b>Chelsea FC (Champions of Europe 2021)</b>. 
							I also try and apply my skills as a tech guy to any open football or Fantasy Premier League data that I see.
							You can see the results of all that in the <Link smooth to="/portfolio#blogs">Blogs and Talks</Link> section.
							Also here's a brilliant <a href="https://www.youtube.com/channel/UCUBFJYcag8j2rm_9HkrrA7w" target="_blank" rel="noopener noreferrer">Youtube channel</a> for anyone interested in Football Analytics.
							The content here is simply superb.
						</p>

						<p>
							I have always liked discussions related to morality, ethics and policy.
							However, I could not find anything like that at my college.
							So I took initiative and <b>Co-founded and headed the Debating Society IIT Ropar</b>.
							I also became the <b>first A-level adjudicator</b> (reached breaking rounds at 3 senior level debates)
							and was the Novice finalist at the Sri Ram College of Commerece Debating Tournament.
							If you are new to debating I suggest you go <a href="https://www.flipkart.com/justice/p/itmc6a68b46a5800" target="_blank" rel="noopener noreferrer">read</a> the book or&nbsp;
							<a href="https://www.youtube.com/watch?v=kBdfcR-8hEY&list=PL30C13C91CFFEFEA6" target="_blank" rel="noopener noreferrer">watch</a> videos of Justice by Michael Sandel.
						</p>

						<p>
							The Debating Society was the most successful initiative that I took.
							I really love teaching (and mentoring) what I know in the fields I am interested in and on those principles 
							I took other initiatives (with mixed success) like Co-Founded the Student AI Community at IIT Ropar, 
							Open Source Society IIT Ropar and Placing Engineers a discord server to crowdsource job openings during the 
							difficult times when Covid had resulted in companies freezing their hiring. We crowdsourced entry level job 
							postings and the senior members of the group also reviewed resumes of the people looking for jobs.
						</p>

						<p>
							That should be it for now. In case I remember other interesting things about myself or do new interesting things, I'll add them here.
						</p>

					</Content>
				</Row>
			{/* Place holder conatainers to provide some padding*/}
			<Container fluid={true} className = "py-4"></Container>
		</Container>
		</div>
  );
}

export default About;