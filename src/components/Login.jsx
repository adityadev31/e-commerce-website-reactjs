import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import "../css/login.css";
import amazonLogoBlack from "../images/amazonLogoBlack.png";
import { auth } from "../firebase";

const Login = () => {
   const history = useHistory();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const signIn = e => {
      e.preventDefault();

      auth.signInWithEmailAndPassword(email, password)
         .then((auth) => {
            if (auth) {
               history.push('/')
            }
         })
         .catch(error => alert(error.message))
   }

   const register = e => {
      e.preventDefault();

      auth.createUserWithEmailAndPassword(email, password)
         .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
               history.push('/')
            }
         })
         .catch(error => alert(error.message))

   }

   return (
      <div className="login">
         <NavLink to="/">
            <img className="login_logo" src={amazonLogoBlack} alt="" />
         </NavLink>

         <div className="login_container">
            <h1>Sign-in</h1>

            <form autoComplete="on" >
               <h5>E-mail</h5>
               <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

               <h5>Password</h5>
               <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

               <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
            </form>
            <p>
               By signing-in you agree to Amazon's
               Conditions of Use & Sale. Please
               see our Privacy Notice, our Cookies Notice
               and our interest based Ads.
            </p>

            <button onClick={register} className="login_registerButton">Create Your Amazon Account</button>
         </div>
      </div>
   )
}

export default Login;
