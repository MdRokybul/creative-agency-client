import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { AdminContext, UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isadmin, setIsAdmin] = useContext(AdminContext);
    const [admin, setAdmin] = useState({
        email: ''
    })

    const handleBlur = e => {
        const newAdmin = {...admin};
        if (e.target.name === "email") {
            newAdmin.email = e.target.value;
            setAdmin(newAdmin);
        }
    }

    const handleAdminSubmit = () => {
        fetch('http://localhost:5000/makeadmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(admin)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    useEffect(() => {
        fetch('http://localhost:5000/isadmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <Container fluid style={{padding: '30px'}}>
            <Row>
                <Col className="col-md-2">
                    <h1>CREATIVE AGENCY</h1>
                </Col>
                <Col className="col-md-9">
                    <h3>Make Admin</h3>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-2 col-sm-3 col-10 d-flex">
                    <Sidebar></Sidebar>
                </Col>
                <Col className="col-md-6 col-sm-6 col-10 ml-auto mr-auto">
                    <p>Email</p>
                    <div className="d-flex">
                        <Form style={{width: '350px'}}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" name="email" placeholder="jon@gmail.com" onBlur={handleBlur}/>
                            </Form.Group>
                        </Form>
                        <div className="pl-3">
                            <Button className="btn btn-success " onClick={handleAdminSubmit}>Submit</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;