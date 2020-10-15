import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ClientServiceListCard.css'

const ClientServiceListCard = ({ singleOrder }) => {
    return (
        <Col className="col-md-4 col-sm-11 col-11 m-4 mt-5" style={{border: '1px solid gray'}}>
            <Row>
                <Col className="col-md-6 col-sm-6 col-12">

                </Col>
                <Col className="col-md-6 col-sm-6 col-12 text-right">
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