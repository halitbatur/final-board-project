import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import db from "../../utils/firebase";
import { auth } from "../../utils/firebase";
// import AuthProvider from "./Auth.js";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })

    
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
  