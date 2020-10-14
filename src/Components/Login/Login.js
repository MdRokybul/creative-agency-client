import React from 'react';
import { Container, Row } from 'react-bootstrap';
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
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setLoggedInUser(user);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <Container >
            <Row className="justify-content-center" style={{marginTop: '15%'}}>
                <div className=" text-center login-container p-5">
                    <h2>Login with</h2>
                    <div className="login-style" onClick={handleLogin}>
                        <img style={{ height: '40px'}} src={googleLogo} alt=""/>
                        <p style={{fontWeight:'bold'}} className="pl-5 m-0">Continue with Google</p>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Login;