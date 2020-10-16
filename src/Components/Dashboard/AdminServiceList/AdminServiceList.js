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
        fetch('https://pure-castle-12905.herokuapp.com/isadmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, []);

    useEffect(() => {
        fetch('https://pure-castle-12905.herokuapp.com/ordersadmin')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <>
            {
                isadmin.email ?
                    <Container fluid style={{ padding: '30px' }}>
                        <Row>
                            <Col className="col-md-3">
                            <img className="main-logo" src="https://firebasestorage.googleapis.com/v0/b/creative-agency-e5e04.appspot.com/o/logo.png?alt=media&token=8f251a1a-3a65-4afe-8fae-13f674038533" alt=""/>
                            </Col>
                            <Col className="col-md-8 ml">
                                <h3>Service List</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-2 col-sm-6 col-10 mt-5 d-flex">
                                <Sidebar></Sidebar>
                            </Col>
                            <Col className="col-md-10 mt-5">
                                <div   >
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '20%' }}>Name</th>
                                                <th style={{ width: '20%' }}>Email ID</th>
                                                <th style={{ width: '20%' }}>Service</th>
                                                <th style={{ width: '26%' }}>Project Details</th>
                                                <th style={{ width: '14%' }}>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                orders.map(order => <AdminServiceTable order={order} key={order._id}></AdminServiceTable>)
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </Container> : <p>Sorry you are not allowed to use this page.</p>

            }
        </>
    );
};

export default AdminServiceList;