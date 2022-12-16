import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import db from "../../utils/firebase";
import { auth } from "../../utils/firebase";

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })


  };

  return (
    <div>
      <h1>Crete an account</h1>
      <form onSubmit={signUpUser}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;