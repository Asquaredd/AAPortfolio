"use client";

import { motion } from "framer-motion";
import AsciiLogo from "./AsciiLogo";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      {/* Navbar is outside the flex container */}
      <Navbar />
      
      <motion.section className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px]" />
        </div>

        {/* NAME AND TITLE - Properly positioned on left */}
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: -300 }}
          transition={{ delay: 3.5, duration: 1, ease: "easeOut" }}
          className="absolute left-20 z-10"
        >
          <h1 className="text-white text-6xl font-bold tracking-wide">
            Aman Adhikari
          </h1>
          <p className="text-gray-300 text-xl mt-4">
            Software Engineer · Embedded Systems · AI
          </p>
        </motion.div>

        {/* ASCII Animation - Starts center, moves right */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 200 }}
          transition={{ delay: 3, duration: 1.5, ease: "easeInOut" }}
          className="text-white z-10"
        >
          <AsciiLogo />
        </motion.div>
      </motion.section>
    </>
  );
}