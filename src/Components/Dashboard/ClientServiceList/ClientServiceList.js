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
        fetch('https://pure-castle-12905.herokuapp.com/individualorder?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setIndividualorder(data))
    }, [])
    return (
        <Container fluid style={{ padding: '30px' }}>
            <Row>
                <Col className="col-md-3">
                <img className="main-logo" src="https://firebasestorage.googleapis.com/v0/b/creative-agency-e5e04.appspot.com/o/logo.png?alt=media&token=8f251a1a-3a65-4afe-8fae-13f674038533" alt=""/>
                </Col>
                <Col className="col-md-8 ml-3">
                    <h3>Service List</h3>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-3 col-sm-6 col-10 mt-5 d-flex">
                    <Sidebar></Sidebar>
                </Col>
                <Col className="col-md-9 col-sm-12 col-11">
                    <Container>
                        <Row>
                            {
                                individualorder.map(singleOrder => <ClientServiceListCard singleOrder={singleOrder} key={singleOrder._id}></ClientServiceListCard>)
                            }
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default ClientServiceList;