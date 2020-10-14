import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import ClientServiceListCard from '../ClientServiceListCard/ClientServiceListCard';
import Sidebar from '../Sidebar/Sidebar';

const ClientServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [individualorder, setIndividualorder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/individualorder?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setIndividualorder(data))
    },[])
    return (
        <Container fluid style={{ padding: '30px' }}>
            <Row>
                <Col className="col-md-2">
                    <h1>CREATIVE AGENCY</h1>
                </Col>
                <Col className="col-md-9">
                    <h3>Service List</h3>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-2 col-sm-3 col-10 d-flex">
                    <Sidebar></Sidebar>
                </Col>
                <Col className="col-md-10">
                    <Container>
                        <Row>
                            {
                                individualorder.map(singleOrder => <ClientServiceListCard singleOrder={singleOrder}></ClientServiceListCard>)
                            }
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default ClientServiceList;