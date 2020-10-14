import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AdminContext, UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [isadmin, setIsAdmin] = useContext(AdminContext);
    console.log(isadmin)


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4" style={{ height: "70vh" }}>
            <ul className="list-unstyled">
                {/* <li>
                    <Link to="/dashboard" >
                        <span>Dashboard</span>
                    </Link>
                </li> */}
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
    );
};

export default Sidebar;