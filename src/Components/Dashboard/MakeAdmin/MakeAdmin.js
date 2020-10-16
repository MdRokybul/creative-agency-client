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
        const newAdmin = { ...admin };
        if (e.target.name === "email") {
            newAdmin.email = e.target.value;
            setAdmin(newAdmin);
        }
    }

    const [postAdmin, setPostAdmin] = useState()
    const handleAdminSubmit = () => {
        fetch('https://pure-castle-12905.herokuapp.com/makeadmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                alert("Admin added successfully!")
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
        <Container fluid style={{ padding: '30px' }}>
            <Row>
                <Col className="col-md-3">
                <img className="main-logo" src="https://firebasestorage.googleapis.com/v0/b/creative-agency-e5e04.appspot.com/o/logo.png?alt=media&token=8f251a1a-3a65-4afe-8fae-13f674038533" alt=""/>
                </Col>
                <Col className="col-md-8 ml-3">
                    <h3>Make Admin</h3>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-3 col-sm-3 col-10 mt-5 d-flex">
                    <Sidebar></Sidebar>
                </Col>
                <Col className="col-md-7 col-sm-9 col-10 ml-auto mr-auto mt-5">
                    <p>Email</p>
                    <div className="d-flex">
                        <Form style={{ width: '350px' }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" name="email" placeholder="jon@gmail.com" onBlur={handleBlur} />
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