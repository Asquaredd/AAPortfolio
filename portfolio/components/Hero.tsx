"use client";

import { motion } from "framer-motion";
import AsciiLogo from "./AsciiLogo";
import Navbar from "./Navbar";
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function Hero() {
  return (
    <>
      <Navbar />
      
      <motion.section className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden px-4">
        {/* Background glow effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] hidden md:block" />
        </div>

        {/* NAME AND TITLE - Vertically centered on left side */}
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          animate={{ opacity: 1, x: -400 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="absolute left-8 md:left-16 lg:left-20 z-10"
        >
          <h1 className={`${jetBrainsMono.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white shimmer`}>
            Aman Adhikari
          </h1>
          <p className={`${jetBrainsMono.className} text-lg sm:text-xl md:text-2xl mt-3 text-gray-300`}>
            Software Engineer · Embedded Systems · Machine Learning
          </p>
        </motion.div>

        {/* ASCII Animation - Instant reveal, then move right after 1s */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 200 }}
          transition={{ 
            delay: 1, 
            duration: 2, 
            ease: "easeInOut" 
          }}
          className="text-white z-10"
        >
          <AsciiLogo />
        </motion.div>
      </motion.section>
    </>
  );
}
