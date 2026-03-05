"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AsciiLogo from "./AsciiLogo";
import Navbar from "./Navbar";
import { JetBrains_Mono } from "next/font/google";
import { Github, Linkedin, Mail, Mouse } from "lucide-react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socials = [
    { icon: <Github size={28} />, href: "https://github.com/Asquaredd" },
    { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/aman-adhikari/" },
    { icon: <Mail size={28} />, href: "mailto:amanadhikarisso@gmail.com?subject=Portfolio%20Inquiry" },
  ];

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />

      <motion.section className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden px-4">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] bg-white/[0.03] rounded-full blur-[120px]" />
        </div>

        {mounted && (
          <>
            {/* LEFT CONTENT - Cinematic Entrance */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 3.5, // Significant delay so ASCII move is the focal point
                duration: 1.5, 
                ease: [0.16, 1, 0.3, 1] // Custom "Quartic" ease-out
              }}
              className="absolute left-[8vw] top-1/2 -translate-y-1/2 z-10 text-left"
            >
              <h1 className={`${jetBrainsMono.className} font-bold text-white tracking-tight [font-size:clamp(2.5rem,6vw,4rem)] leading-tight`}>
                Aman Adhikari
              </h1>

              <p className={`${jetBrainsMono.className} mt-6 text-gray-400 opacity-90 whitespace-nowrap [font-size:clamp(1rem,1.8vw,1.2rem)] leading-relaxed max-w-xl`}>
                Software Engineer · Embedded Systems · Machine Learning
              </p>

              {/* Socials Staggered slightly */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.2, duration: 1 }}
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
                    <div className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 2 }}
                onClick={handleScrollClick}
                className="mt-16 flex items-center gap-4 cursor-pointer text-white"
              >
                <div className="relative flex items-center justify-center">
                  <Mouse size={36} strokeWidth={1.5} />
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[2px] h-[5px] bg-white rounded-full"
                    style={{ top: "8px" }}
                  />
                </div>
                <span className={`${jetBrainsMono.className} text-sm tracking-wide opacity-50`}>Scroll Down</span>
              </motion.div>
            </motion.div>

            {/* ASCII LOGO - Cinematic Stall & Slide */}
            <motion.div
              initial={{ 
                opacity: 0, 
                x: "-50%", 
                y: "-50%", 
                left: "50%", 
                top: "50%",
                scale: 0.95
              }}
              animate={{ 
                opacity: 1, 
                left: "72%",
                scale: 1
              }}
              transition={{ 
                opacity: { duration: 1.5, ease: "easeIn" }, 
                left: { 
                  delay: 1.8, // The "Stall": Logo stays center for 0.8s after fading in
                  duration: 2, 
                  ease: [0.65, 0, 0.35, 1] // Dramatic "Cubic" slide
                },
                scale: { duration: 2 }
              }}
              className="absolute z-10 hidden lg:block whitespace-pre select-none"
            >
              <AsciiLogo />
            </motion.div>
          </>
        )}
      </motion.section>
    </>
  );
}