import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service1 from '../../../images/icons/service1.png';
import Service2 from '../../../images/icons/service2.png';
import Service3 from '../../../images/icons/service3.png';
import ServiceList from '../ServiceList/ServiceList';


const Services = () => {
    const [allService, setAllService] = useState([]);

    useEffect(() => {
        fetch('https://pure-castle-12905.herokuapp.com/allservice')
        .then(res => res.json())
        .then(data => setAllService(data))
    },[]);

   

    return (
        <Container>
            <Row className="mb-5">
                <Col>
                    <h2 className="text-center">Provide awesome <span style={{color: '#7AB259'}}>services</span></h2>
                </Col>
            </Row>
            <Row>
                <Container>
                    <Row className="justify-content-center">
                        {
                            allService.map(service => <ServiceList service={service}></ServiceList>)
                        }
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};

export default Services;