import React from 'react';
import {Container, Row } from 'react-bootstrap';
import googleLogo from '../../images/logos/google logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const user = result.user;
            setLoggedInUser(user);
            history.replace(from);
        }).catch(function (error) {
            
        });
    }
    return (
        <Container >
            <Row className="login-logo">
            <img className="main-logo" src="https://firebasestorage.googleapis.com/v0/b/creative-agency-e5e04.appspot.com/o/logo.png?alt=media&token=8f251a1a-3a65-4afe-8fae-13f674038533" alt=""/>
            </Row>
            <Row className="justify-content-center" >
                <div className=" text-center login-container p-5">
                    <h2>Login with</h2>
                    <div className="login-style" onClick={handleLogin}>
                        <img style={{ height: '40px' }} src={googleLogo} alt="" />
                        <p style={{ fontWeight: 'bold' }} className="pl-5 m-0">Continue with Google</p>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Login;