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
        {/* Background glow effect - scales slightly on larger screens */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] bg-white/5 rounded-full blur-[150px] hidden md:block" />
        </div>

        {/* NAME AND TITLE - Responsive left positioning & vertical centering */}
        <motion.div
          initial={{ opacity: 0, x: "-10vw" }}       // Subtle slide-in from left
          animate={{ opacity: 1, x: "5vw" }}         // Final position: 5% from left
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="absolute left-[5vw] top-1/2 -translate-y-1/2 z-10 text-left"
        >
          <h1 
            className={`${jetBrainsMono.className} font-bold text-white tracking-tight shimmer
              [font-size:clamp(2rem,5vw,3rem)] leading-tight`}
          >
            Aman Adhikari
          </h1>

          <p 
            className={`${jetBrainsMono.className} mt-4 text-gray-300 opacity-90
              [font-size:clamp(1rem,1.5vw,0.5rem)] leading-relaxed`}
          >
            Software Engineer · Embedded Systems · Machine Learning
          </p>
        </motion.div>

        {/* ASCII Logo - Moves responsively to the right */}
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: "28vw", opacity: 1 }}        // Adjusts nicely on all screens
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