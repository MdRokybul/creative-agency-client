import React from 'react';
import {Col, Container, Form, Row } from 'react-bootstrap';

const ContactContainer = () => {
    return (
        <Container style={{padding: '60px 0px'}} >
            <Row className="justify-content-center">
                <Col className="col-md-5 col-sm-6 col-10">
                    <h1 style={{ color: 'black' }}>Let us handle your <br /> project professionally</h1>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel odio adipisci facilis ipsum at quisquam! </p>
                </Col>
                <Col className="col-md-7 col-sm-6 col-10">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Your email address" />
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Control type="text" placeholder="Your name/Company's name" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={10} placeholder="Your message" />
                        </Form.Group>
                        <button className="main-button text-white">Send</button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactContainer;