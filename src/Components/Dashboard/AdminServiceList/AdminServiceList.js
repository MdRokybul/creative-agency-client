import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { AdminContext, UserContext } from '../../../App';
import AdminServiceTable from '../AdminServiceTable/AdminServiceTable';
import Sidebar from '../Sidebar/Sidebar';

const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isadmin, setIsAdmin] = useContext(AdminContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/isadmin',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/ordersadmin')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <>
        {
            isadmin.email ? 
            <Container fluid style={{padding: '30px'}}>
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
                <Col className="col-md-9">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Project Details</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <AdminServiceTable order={order}></AdminServiceTable>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container> : <p>Sorry you are not allowed to use this page.</p>

        }
        </>
    );
};

export default AdminServiceList;