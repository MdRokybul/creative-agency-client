import React from 'react';
import { Col } from 'react-bootstrap';
import './FeedbackCards.css';

const FeedbackCards = ({ feedback }) => {
    return (
        <Col className="col-md-3 col-sm-4 col-10 mb-5 feedback-container">
            <div className="d-flex">
                {/* <img style={{ height: '70px' }} src={feedback.img} alt="" /> */}
                <div className="pl-3">
                    <h4> {feedback.name} </h4>
                    <p style={{fontWeight: 'bold'}}> {feedback.designation} </p>
                </div>
            </div>
            <div>
                <p className="text-dark"> {feedback.description} </p>
            </div>
        </Col>
    );
};

export default FeedbackCards;