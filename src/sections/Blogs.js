import React from "react";
import Container from "react-bootstrap/Container";

import Hero from "../components/Hero";
import Content from "../components/Content";

// NOTE :- Can use cards here

function Blogs(props) {
  return (
    <div id="blogs">
      <Container fluid={true}>
        <Hero title={props.title} text={props.text} />
        <Content>
          <ul>
            <li>
              <h5>
                Fantasy Premier League 19/20, a review - Part 1, Basics :-
                <a
                  href="https://medium.com/@2017csb1079/fantasy-premier-league-19-20-a-review-part-1-basics-167e610e229"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Here
                </a>
              </h5>
            </li>
            <li>
              <h5>
                Modelling Football Data and Assigning Player Ratings (VAEP
                Model) :-
                <a
                  href="https://www.youtube.com/watch?v=eROyFUy2W5g"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Here
                </a>
              </h5>
            </li>
            <li>
              <h5>
                Premier League, Metric Over/Underperformance :-
                <a
                  href="https://twitter.com/DhillonHersh/status/1290025606168506369"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Here
                </a>
              </h5>
            </li>
          </ul>
        </Content>
        <Container fluid={true} className="py-4"></Container>
      </Container>
    </div>
  );
}

export default Blogs;
