import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Frame from '../../../../images/logos/Frame.png'

const Banner = () => {
    return (
        <Container>
            <Row>
                <Col className="col-md-5 col-sm-12 col-12 mt-auto">
                    <h1 style={{fontWeight: '700'}}>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur impedit nostrum nihil. Voluptas, consequatur eaque.</p>
                    <button className="main-button text-white pl-5 pr-5">Hire us</button>
                </Col>
                <Col className="col-md-7 col-sm-12 col-12 mt-auto mb-auto">
                    <img style={{width: '90%'}} src={Frame} alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;