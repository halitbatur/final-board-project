import React from "react";
import { motion } from "framer-motion";
export default function AddProject() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      Add
    </motion.div>
  );
}
