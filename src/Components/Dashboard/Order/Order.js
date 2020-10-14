import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ServiceContext, TitleContext, UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import OrderTest from './OrderTest';


const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useState([]);
    console.log(selectedService);
    const [set, setTitle] = useContext(TitleContext);
    console.log(set);

    let { id } = useParams();

    const [orders, setOrders] = useState({
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        service: '',
        message: '',
        status: 'Pending'
    });
    console.log(orders);

    const handleBlur = e => {
        const newOrders = { ...orders };

        if (e.target.name === "message") {
            if (id) {
                const title = set.title;
                newOrders.service = title;
            }
            newOrders.message = e.target.value;
            setOrders(newOrders);
        }
    }

    const handleOrderSubmit = () => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                alert("Your order has been successfully submitted");
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/allservice')
            .then(res => res.json())
            .then(data => setSelectedService(data))
    }, []);


    useEffect(() => {
    const single = selectedService.find(singleService => singleService._id === id);
    setTitle(single);
    },[selectedService])



    return (
        <Container fluid style={{ padding: '30px' }}>
            <Row>
                <Col className="col-md-2">
                    <h1>CREATIVE AGENCY</h1>
                </Col>
                <Col className="col-md-9">
                    <h3>Order</h3>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-2 col-sm-3 col-10 d-flex">
                    <Sidebar></Sidebar>
                </Col>
                <Col className="col-md-6 col-sm-6 col-10 ml-auto mr-auto">
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Control type="text" name="name" value={loggedInUser.displayName} onBlur={handleBlur} placeholder="Your name/Company's name" disabled />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" name="email" value={loggedInUser.email} onBlur={handleBlur} placeholder="Your email address" disabled />
                        </Form.Group>
                        <Form.Group controlId="formBasicService">
                            <Form.Control type="text" name="service" onBlur={handleBlur} value={orders.service} placeholder="Service" disabled />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" name="message" onBlur={handleBlur} placeholder="Your message" />
                        </Form.Group>
                        {
                            orders.message !== "" && orders.service !== "" ?
                                <Button className="main-button text-white pl-5 pr-5" onClick={handleOrderSubmit}>Send</Button> :
                                <Button className="main-button text-white pl-5 pr-5" disabled>Send</Button>
                        }
                    </Form>
                </Col>
            </Row>


        </Container>
    );
};

export default Order;