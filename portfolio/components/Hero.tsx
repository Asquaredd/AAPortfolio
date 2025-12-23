"use client";

import { motion } from "framer-motion";
import AsciiLogo from "./AsciiLogo";

export default function Hero() {
  return (
    <motion.section className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* NAME HEADER - Revealed from left */}
      <motion.h1
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: -500, opacity: 1 }}
        transition={{ delay: 4, duration: 1.2, ease: "easeOut" }}
        className="absolute left-12 text-white text-5xl font-bold tracking-wide"
      >
        Aman Adhikari
      </motion.h1>

      {/* ASCII Animation - Moves right */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 80 }}
        transition={{ delay: 4, duration: 1.2, ease: "easeInOut" }}
      >
        <AsciiLogo />
      </motion.div>
    </motion.section>
  );
}
