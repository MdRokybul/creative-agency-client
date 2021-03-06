import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ClientServiceListCard.css'

const ClientServiceListCard = ({ singleOrder }) => {
    return (
        <Col className="col-md-5 col-sm-12 col-12 m-2 mt-5" style={{border: '1px solid gray'}}>
            <Row>
                <Col className="col-md-6 col-sm-3 col-12">

                </Col>
                <Col className="col-md-6 col-sm-9 col-12 text-right">
                {
                    singleOrder.status === "Pending" ? <button className="btn btn-danger status-button"> {singleOrder.status} </button> 
                    : singleOrder.status === "On Going" ? <button className="btn btn-primary status-button"> {singleOrder.status} </button> 
                    : singleOrder.status === "Done" ? <button className="btn btn-success status-button"> {singleOrder.status} </button>: null
                }
                </Col>
            </Row>
            <Col className="col-md-12 col-sm-12 col-12">
                <h4> {singleOrder.service} </h4>
            </Col>
            <Col className="col-md-12">
                <p> {singleOrder.message} </p>
            </Col>
        </Col>
    );
};

export default ClientServiceListCard;