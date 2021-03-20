import React from 'react';
import { useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history= useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    var provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /^[^\s@]+@[^\s@]+$/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);

            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (e.target.name === 'password-repeat') {
            if (document.getElementById('password').value === document.getElementById('password_repeat').value) {
                isFieldValid = true;
            }
            else {
                isFieldValid = false;
            }
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);

                    // ..
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    // Signed in
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    // const {name, email} = { ...user };
                    // const newUserInfo = {name, email};
                    // newUserInfo.error = '';
                    // newUserInfo.success = true;
                    // setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email}
                setLoggedInUser(signedInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
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

    const handleFbSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                // var user = result.user;
                // console.log(user);
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email}
                setLoggedInUser(signedInUser);
                history.replace(from);

                // ...
            })
            .catch((error) => {
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
        <div>
            {/* <p>Email: {user.email}</p> */}
            <form style={{ border: "1px solid #ccc" }} onSubmit={handleSubmit}>
                <div className="container">
                    {<h1>{!newUser ? 'Log in' : 'Sign Up'}</h1>}
                    <p>Please fill in this form to {newUser ? 'create' : 'log in'} an account.</p>
                    <hr />

                    {newUser && <label htmlFor="name"><b>Name</b></label>}
                    {newUser && <input type="text" onBlur={handleBlur} placeholder="Enter Name" name="name" required></input>}

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" onBlur={handleBlur} placeholder="Enter Email" name="email" required></input>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input id="password" type="password" onBlur={handleBlur} placeholder="Enter Password" name="password" required></input>

                    {newUser && <label htmlFor="psw-repeat"><b>Repeat Password</b></label>}
                    {newUser && <input id="password_repeat" type="password" placeholder="Repeat Password" name="password-repeat" required></input>}

                    {/* <input type="checkbox" name="remember" style={{ marginBottom: "15px" }}></input>
                    <label htmlFor="">Remember me</label> */}

                    <div className="clearfix">
                        {/* <button type="button" class="cancelbtn">Cancel</button> */}
                        <button type="submit" className="signupbtn">{newUser ? 'Sign Up' : 'Log in'}</button>
                    </div>
                </div>
            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && <p style={{ color: 'green' }}>User {!newUser ? 'logged in' : 'created'} successfully</p>}
            <div className="App">
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="remember" style={{ marginBottom: "15px" }}></input>
                <label htmlFor="newUser"> Already have an account</label>
                <br />
                <button onClick={handleGoogleSignIn} type="submit" className="googleBtn">Sign in with Google</button>
                <br />
                <button onClick={handleFbSignIn} type="submit" className="fbBtn">Sign in with Facebook</button>
            </div>
        </div>
    );
};

export default Login;