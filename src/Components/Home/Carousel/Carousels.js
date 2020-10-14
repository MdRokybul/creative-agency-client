import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import './Carousels.css'
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const Carousels = () => {
    return (
        <Container style={{backgroundColor: '#111430'}} className="mb-5">
            <h3 style={{color: 'white'}} className="text-center pt-5">Here are some of <span style={{color: '#7AB259'}}>our works</span> </h3>
            <div className="carousel-style">
            <Carousel breakPoints={breakPoints}>
                <Item style={{margin:'0px 50px'}}> <img style={{height: "100%", width:'100%'}} src={carousel1} alt=""/> </Item>
                <Item style={{margin:'0px 50px'}}> <img style={{height: "100%", width:'100%'}} src={carousel2} alt=""/></Item>
                <Item style={{margin:'0px 50px'}}> <img style={{height: "100%", width:'100%'}} src={carousel3} alt=""/></Item>
            </Carousel>
            </div>
        </Container>
    );
};

export default Carousels;