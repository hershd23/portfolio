import React from 'react';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Card from '../components/Card'

import devgrub from '../assets/images/devgrub.png';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devgrub,
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Hersh-Github',
                    subTitle: 'Github page',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Everrest',
                    subTitle: 'A social network for developers',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                }
            ]
        }
    }

    handleCardClick =(id, card) => {
        console.log(id)

        let items = [...this.state.items];
       
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
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