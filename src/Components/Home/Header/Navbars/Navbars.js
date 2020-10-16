import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbars.css'

const Navbars = () => {
    return (
        <Container className="mb-4">
            <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    <img className="main-logo" src="https://firebasestorage.googleapis.com/v0/b/creative-agency-e5e04.appspot.com/o/logo.png?alt=media&token=8f251a1a-3a65-4afe-8fae-13f674038533" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
                    <Nav className="ml-auto nav-style">
                        <Link className="ml-3" to="#home">Home</Link>
                        <Link className="ml-3" to="#link">Our Portfolio</Link>
                        <Link className="ml-3" to="#link">Our Team</Link>
                        <Link className="ml-3" to="#link">Contact Us</Link>
                        <Link className="ml-3" to="/dashboard">Dashboard</Link>
                        <Nav.Link className="main-button text-white ml-4 pl-4 pr-4" href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Navbars;