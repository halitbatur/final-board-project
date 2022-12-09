import React from "react";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="min-h-full w-full dark:bg-[#121212]"
    >
      <h1 className="text-5xl">Home Page</h1>
    </motion.div>
  );
}
