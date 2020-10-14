import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Order from '../Order/Order';
import { AdminContext, UserContext } from '../../../App';
import { useEffect } from 'react';
import AdminServiceList from '../AdminServiceList/AdminServiceList';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isadmin, setIsAdmin] = useContext(AdminContext);
    console.log(isadmin);
    

    useEffect(() => {
        fetch('http://localhost:5000/isadmin',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [])
    
    return (
        <Container fluid>
            <Row>
                <Col className="col-md-10">
                    {
                        isadmin.email ? <AdminServiceList/> : <Order/>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;