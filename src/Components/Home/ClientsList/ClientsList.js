import React from 'react';
import Slack from '../../../images/logos/slack.png';
import Google from '../../../images/logos/google.png';
import Uber from '../../../images/logos/uber.png';
import Netflix from '../../../images/logos/netflix.png';
import Airbnb from '../../../images/logos/airbnb.png';
import { Container, Row } from 'react-bootstrap';
import './ClientsList.css';

const ClientsList = () => {
    return (
        <Container style={{ marginBottom: '100px' }}>

            <Row className="d-flex justify-content-center">
                <img className="image-style" src={Slack} alt="" />
                <img className="image-style" src={Google} alt="" />
                <img className="image-style" src={Uber} alt="" />
                <img className="image-style" src={Netflix} alt="" />
                <img className="image-style" src={Airbnb} alt="" />
            </Row>
        </Container>
    );
};

export default ClientsList;