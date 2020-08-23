import React from 'react';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Card from '../components/Card'

import cjh from '../assets/images/cjh.png';
import can from '../assets/images/can.png';
import obj from '../assets/images/obj.png';
import risc from '../assets/images/risc.jpg';
import bow from '../assets/images/bow.png';
import map from '../assets/images/map.jpeg'

class Carousel extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
							{
								id: 4,
								title: 'Characterizing Job Hirability',
								subTitle: 'Paper submitted in ICMI 2020',
								imgSrc: cjh,
								link: 'https://arxiv.org/pdf/2006.12041.pdf',
								selected: true
							},
							{
								id: 5,
								title: 'CoronaMap',
								subTitle: 'Live cornavirus visualizations',
								imgSrc: map,
								link: 'https://hershd23.github.io/CoronaMap/',
								selected: true
							},
							{
								id: 0,
								title: 'Collaborative Adversarial Networks',
								subTitle: 'Implementation of CAN architecture for Question Answering',
								imgSrc: can,
								link: 'https://github.com/hershd23/Collaborative-Adversarial-Network',
								selected: true
							},
							{
								id: 1,
								title: 'Object Localizer',
								subTitle: 'Object Localizer for the Flipkart CV Challenge',
								imgSrc: obj,
								link: 'https://github.com/hershd23/ObjectLocalizer',
								selected: true
							},
							{
								id: 2,
								title: 'RISC-V Simulator',
								subTitle: 'Built a RISC-V simulator in C++ with Electron UI',
								imgSrc: risc,
								link: 'https://github.com/hershd23/AC2MC-simulator',
								selected: true
							},
							{
								id: 3,
								title: 'Spam Filter in C',
								subTitle: 'Spam filter using K-means algorithm on BOW',
								imgSrc: bow,
								link: 'https://github.com/hershd23/SpamFilterC',
								selected: true
							}
			]
		}
	}

	handleCardClick =(id, card) => {
		console.log(id)

		/*let items = [...this.state.items];
		
		items[id].selected = items[id].selected ? false : true;

		items.forEach(item => {
			if(item.id !== id) {
							item.selected = false;
			}
		});

		this.setState({
				items
		});*/
	}

	makeItems = (items) => {
		return items.map(item=>{
				return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
		})
	}

	render() {
		return(
			<Container fluid = {true}>
					<Row className="justify-content-around">
							{this.makeItems(this.state.items)}
					</Row>
			</Container>
		);
	}
}

export default Carousel;