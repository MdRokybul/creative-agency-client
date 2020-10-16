import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [feedbacks, setFeedbacks] = useState({
        name: '',
        designation: '',
        description: ''
    })

    const handleBlur = e => {
        const newFeedback = { ...feedbacks }
        if (e.target.name === "name") {
            newFeedback.name = e.target.value;
            setFeedbacks(newFeedback);
        }
        if (e.target.name === "designation") {
            newFeedback.designation = e.target.value;
            setFeedbacks(newFeedback);
        }
        if (e.target.name === "description") {
            newFeedback.description = e.target.value;
            setFeedbacks(newFeedback);
        }
    }


    const handleReview = () => {
        fetch('https://pure-castle-12905.herokuapp.com/addfeedback', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(feedbacks)
        })
            .then(res => res.json())
            .then(data => {
                alert("Your review has been successfully submitted!")
            })
    }

    return (
        <Container fluid style={{ padding: '30px' }}>
            <Row>
                <Col className="col-md-3">
                <img className="main-logo" src="https://firebasestorage.googleapis.com/v0/b/creative-agency-e5e04.appspot.com/o/logo.png?alt=media&token=8f251a1a-3a65-4afe-8fae-13f674038533" alt=""/>
                </Col>
                <Col className="col-md-8 ml-3">
                    <h3>Review</h3>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-3 col-sm-6 col-10 mt-5 d-flex">
                    <Sidebar></Sidebar>
                </Col>
                <Col className="col-md-7 col-sm-6 col-10 ml-auto mr-auto">
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Control type="email" name="name" onBlur={handleBlur} placeholder="Your name/Company's name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicService">
                            <Form.Control type="text" name="designation" onBlur={handleBlur} placeholder="Company's Name, Designation" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" name="description" rows="3" onBlur={handleBlur} placeholder="Description" />
                        </Form.Group>
                        <Button className="main-button text-white pl-5 pr-5" onClick={handleReview}>Send</Button>
                    </Form>
                </Col>
            </Row>
        </Container>


    );
};

export default Review;