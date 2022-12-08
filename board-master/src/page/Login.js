import React from "react";
import LoginSvg from "../components/svg/LoginSvg";
import { motion } from "framer-motion";
export default function Login() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="min-h-full flex  text-[#121212] dark:text-[#ffffff]  justify-around items-center  dark:bg-[#121212]"
    >
      <div className="w-96 h-fit py-10 px-5 flex flex-col justify-center gap-20 items-start">
        <div className="flex  flex-col items-start justify-start gap-3">
          <h1 className="text-6xl ">Login</h1>
          <p>Welcome to board Master :) </p>
        </div>

        <form className="flex flex-col gap-16">
          <label className="flex  flex-col justify-start items-start gap-3">
            <span className="text-xl ">Email</span>
            <input
              className="w-96 bg-slate-100 dark:bg-[#252525] text-lg px-3 py-3 rounded-full "
              placeholder="Type your email "
            ></input>
          </label>
          <label className="flex flex-col items-start justify-start gap-2">
            <span className="text-xl">Password</span>
            <input
              className="w-96 bg-slate-100 dark:bg-[#252525] text-lg px-3 py-3 rounded-full"
              placeholder="Type your password "
            ></input>
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
