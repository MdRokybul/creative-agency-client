import React from 'react';
import { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [isadmin, setIsAdmin] = useContext(AdminContext);

    return (
        <>
            <Navbar bg="light" expand="lg" style={{display:'block'}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                            <div className="sidebar d-flex flex-column justify-content-between col-md-12" style={{ height: "70vh" }}>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/" >
                                            <span>Home</span>
                                        </Link>
                                    </li>
                                    {!isadmin.email ? <div>
                                        <li>
                                            <Link to="/order" >
                                                <span>Order</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/servicelist" >
                                                <span>Service List</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/review" >
                                                <span>Review</span>
                                            </Link>
                                        </li>
                                    </div> :
                                        <div>
                                            <li>
                                                <Link to="/adminservicelist"  >
                                                    <span>Service List</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/addservice"  >
                                                    <span>Add Service</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/makeadmin"  >
                                                    <span>Make Admin</span>
                                                </Link>
                                            </li>
                                        </div>
                                    }
                                </ul>
                                <div>
                                    <a href="/">Logout</a>
                                </div>
                            </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>
    );
};

export default Sidebar;