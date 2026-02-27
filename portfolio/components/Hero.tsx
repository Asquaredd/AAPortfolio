"use client";

import { motion } from "framer-motion";
import AsciiLogo from "./AsciiLogo";
import Navbar from "./Navbar";
import { JetBrains_Mono } from 'next/font/google';
import { Github, Linkedin, Mail } from "lucide-react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function Hero() {
  const socials = [
    { icon: <Github size={28} />, href: "https://github.com/yourusername" },
    { icon: <Linkedin size={28} />, href: "https://linkedin.com/in/yourusername" },
    { icon: <Mail size={28} />, href: "mailto:your@email.com" },
  ];

  return (
    <>
      <Navbar />
      
      <motion.section className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden px-4">
        {/* Subtle Background Aura Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-white/[0.03] rounded-full blur-[120px]" />
        </div>

        {/* NAME AND TITLE */}
        <motion.div
          initial={{ opacity: 0, x: "-10vw" }}
          animate={{ opacity: 1, x: "5vw" }}
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="absolute left-[5vw] top-1/2 -translate-y-1/2 z-10 text-left"
        >
          <h1 className={`${jetBrainsMono.className} font-bold text-white tracking-tight [font-size:clamp(2.5rem,6vw,4rem)] leading-tight`}>
            Aman Adhikari
          </h1>

          <p className={`${jetBrainsMono.className} mt-6 text-gray-400 opacity-90 whitespace-nowrap [font-size:clamp(1rem,1.8vw,1.2rem)] leading-relaxed max-w-xl`}>
            Software Engineer · Embedded Systems · Machine Learning
          </p>

          {/* --- LARGE SOCIAL DASHBOARD --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="flex gap-8 mt-12 items-center"
          >
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-2 text-white/60 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.2 }}
              >
                {/* The "Subtle Glow" - pulses in the background */}
                <motion.div 
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.5 
                  }}
                  className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                {/* The Icon itself */}
                <div className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ASCII Logo */}
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: "28vw", opacity: 1 }}
          transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          className="text-white z-10 hidden lg:block"
        >
          <AsciiLogo />
        </motion.div>
      </motion.section>
    </>
  );
}