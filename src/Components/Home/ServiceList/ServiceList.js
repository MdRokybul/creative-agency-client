import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceList.css'

const ServiceList = ({ service}) => {

    return (
        <Col className="col-md-3 col-sm-4 col-10 mb-5 text-center card-style">
            <Link to={`/order/${service._id}`}>
                {/* <img style={{ height: '70px' }} src={service.img} alt="" /> */}
                <h4> {service.title} </h4>
                <p> {service.description} </p>
            </Link>
        </Col>
    );
};

export default ServiceList;