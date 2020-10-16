import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { AdminContext, UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isadmin, setIsAdmin] = useContext(AdminContext);
    const [services, setServices] = useState({
        title: '',
        description: '',
    })

    const handleBlur = e => {
        const newService = { ...services }
        if (e.target.name === "service") {
            newService.title = e.target.value;
            setServices(newService);
        }
        if (e.target.name === "description") {
            newService.description = e.target.value;
            setServices(newService);
        }
    }

    const handleAddService = () => {
        fetch('https://pure-castle-12905.herokuapp.com/addservice', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                alert("Service added successfully!");
                document.querySelector('input').value = "";
                document.querySelector('textarea').value = "";
            })
    }

    useEffect(() => {
        fetch('https://pure-castle-12905.herokuapp.com/isadmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <>
            {
                isadmin.email ?
                    <Container fluid style={{ padding: '30px' }}>
                        <Row>
                            <Col className="col-md-3">
                                <img className="main-logo" src="https://firebasestorage.googleapis.com/v0/b/creative-agency-e5e04.appspot.com/o/logo.png?alt=media&token=8f251a1a-3a65-4afe-8fae-13f674038533" alt="" />
                            </Col>
                            <Col className="col-md-8 ml-3">
                                <h3>Add Service</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-3 col-sm-3 col-10 mt-5 d-flex">
                                <Sidebar></Sidebar>
                            </Col>
                            <Col className="col-md-7 col-sm-9 col-10 ml-auto mr-auto mt-5">
                                <Form>
                                    <Form.Group controlId="formBasicService">
                                        <Form.Label style={{ fontWeight: 'bold' }}>Service Title</Form.Label>
                                        <Form.Control type="text" name="service" onBlur={handleBlur} placeholder="Service" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label style={{ fontWeight: 'bold' }} >Description</Form.Label>
                                        <Form.Control as="textarea" rows="3" name="description" onBlur={handleBlur} placeholder="Enter Description" />
                                    </Form.Group>
                                </Form>
                                <div>
                                    <Button className="btn btn-success" onClick={handleAddService}>Submit</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    : <p>Sorry! You are not allowed to use this page</p>
            }
        </>
    );
};

export default AddService;