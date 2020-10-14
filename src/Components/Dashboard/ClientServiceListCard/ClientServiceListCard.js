import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ClientServiceListCard = ({ singleOrder }) => {
    return (
        <Col className="col-md-4 m-5" style={{border: '1px solid gray'}}>
            <Row>
                <Col className="col-md-6 col-sm-5 col-11">

                </Col>
                <Col className="col-md-6 col-sm-5 col-11">
                    <p> {singleOrder.status} </p>
                </Col>
            </Row>
            <Col className="col-md-11">
                <h4> {singleOrder.service} </h4>
            </Col>
            <Col className="col-md-11">
                <p> {singleOrder.message} </p>
            </Col>
        </Col>
    );
};

export default ClientServiceListCard;