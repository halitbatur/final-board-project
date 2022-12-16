import React from "react";
import LoginSvg from "../components/svg/LoginSvg";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { getAuth , signInWithEmailAndPassword  } from "firebase/auth";
import app from '../firebase/initFirebase'
import { Route } from "react-router";
import Home from "./Home";
const auth = getAuth(app);

export default function Login() {
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // in here send the values to the firebase login
      signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in 
        
        const user = userCredential.displayName;
        console.log(user.uid);
        
        if (user.uid!=="") {
          //Add the route here to the home page
        // <Route path="/" element={<Home></Home>}></Route>
          
        }        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
      console.log(values.email, values.password);
    },
  });
  const [Hidepassword, setHidePassword] = useState("password");
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("user is signed in");
      // ...
    } else {
      // User is signed out

      // ...
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="min-h-full flex  font-Main text-[#121212] dark:text-[#ffffff]  justify-around items-center  dark:bg-[#121212]"
    >
      <div className="w-96 h-fit py-10 px-5 flex flex-col justify-center gap-16 items-start">
        <div className="flex  flex-col items-start justify-start gap-3">
          <h1 className="text-6xl ">Login</h1>
          <p>Welcome to board Master :) </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8  ">
          <label className="flex  flex-col justify-start items-start gap-2">
            <span className="text-xl ">Email</span>
            <input
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              type={"email"}
              className="w-96 bg-slate-100 dark:bg-[#252525] text-lg px-3 py-3 rounded-full "
              placeholder="Type your email "
            ></input>
            <div className="flex justify-between w-full">
              {formik.touched.email && formik.errors.email && (
                <p className="dark:text-[#cf6679] text-[#b00020]">
                  {formik.errors.email}
                </p>
              )}
              <h1 className="dark:text-[#121212] text-[#ffffff]">.</h1>
            </div>
          </label>
          <label className="flex flex-col items-start justify-start gap-2">
            <span className="text-xl">Password</span>
            <input
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              type={Hidepassword}
              onBlur={formik.handleBlur}
              className="w-96 bg-slate-100 dark:bg-[#252525] text-lg px-3 py-3 rounded-full"
              placeholder="Type your password "
            ></input>
            <div className="flex justify-between w-full">
              {formik.touched.password && formik.errors.password && (
                <h1 className="dark:text-[#cf6679] text-[#b00020]">
                  {formik.errors.password}
                </h1>
              )}
              <label className="flex gap-5 py-2 items-center justify-start ml-5">
                <input
                  onChange={() => {
                    setHidePassword(
                      Hidepassword === "text" ? "password" : "text"
                    );
                  }}
                  type={"checkbox"}
                  className="text-4xl bg-[#018786]  scale-150 "
                ></input>
                <span className={`text-sm  font-light `}>Show passowrd</span>
              </label>
            </div>
          </label>
          <button className="w-96 text-[#ffffff] bg-[#018786] dark:text-[#121212] text-3xl dark:bg-[#03dac6] hover:scale-110 transition-all hover:shadow-2xl active:shadow-lg px-3 py-3 rounded-full">
            Login
          </button>
        </form>
      </div>
      <LoginSvg></LoginSvg>
    </motion.div>
  );
}
