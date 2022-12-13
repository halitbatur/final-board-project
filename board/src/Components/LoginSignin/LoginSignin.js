import { async } from "@firebase/util";
import React, { useRef, useState } from "react";
import { firestore } from "../../firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import "./LoginSignin.css";

function LoginSignin() {
  const [isLogin, setIsLogin] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const ref = collection(firestore, "user")
  const handleSave = async (e) => {
    e.preventDefault();
    let data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    try {
      addDoc(ref, data)
      const users = await getDocs(collection(firestore, "user"));
      querySnapshot.forEach(doc => {
        console.log(doc.id, " =>", doc.data());
      });
    } catch (e) {
      console.log(e);
    }
    setIsLogin(true)
  }

  return (
    <div className="login_container">
      <h2>Sign in</h2>
      {isLogin ? (
        <p>Your Sign-in was successful</p>

      ) : (
        <form className="form" onSubmit={handleSave}>
          <div className="element_form">
            <label className="label">Email address</label>
            <input ref={emailRef}
              type="email"
              placeholder="Enter email"
            /></div>

          <div className="element_form">
            <label className="label">Password</label>
            <input ref={passwordRef}
              type="password"
              placeholder="Enter password"
            />
          </div>

          <p className="element_form">
            Already has account? <a href="login">login?</a>
          </p>
          <button

            type="submit">Save</button>

        </form>)
      }

    </div>
  );
}

export default LoginSignin;
