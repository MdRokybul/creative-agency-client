import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbars.css'

const Navbars = () => {
    return (
        <Container className="mb-4">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">CREATIVE AGENCY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
                        <Nav className="ml-auto nav-style">
                            <Link className="ml-3" href="#home">Home</Link>
                            <Link className="ml-3" href="#link">Our Portfolio</Link>
                            <Link className="ml-3" href="#link">Our Team</Link>
                            <Link className="ml-3" href="#link">Contact Us</Link>
                            <Link className="ml-3" to="/dashboard">Dashboard</Link>
                            <Nav.Link className="main-button text-white ml-4 pl-4 pr-4" href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Container>
    );
};

export default Navbars;