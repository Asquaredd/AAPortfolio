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
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <motion.section className="relative min-h-screen w-full bg-black overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[85vw] w-[85vw] rounded-full bg-white/[0.03] blur-[120px] sm:h-[70vw] sm:w-[70vw] lg:h-[55vw] lg:w-[55vw]" />
        </div>

        {mounted && (
          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-11rem)] w-full max-w-5xl flex-col items-center justify-center gap-10 text-center sm:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
              }}
              className="flex w-full justify-center"
            >
              <AsciiLogo className="origin-center text-[0.36rem] sm:text-[0.5rem] md:text-[0.64rem] lg:text-[0.78rem] xl:text-[0.95rem] 2xl:text-[1.1rem]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.15,
                duration: 1.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex max-w-3xl flex-col items-center text-center"
            >
              <h1 className={`${jetBrainsMono.className} font-bold text-white tracking-tight [font-size:clamp(2.5rem,6vw,4rem)] leading-tight`}>
                Aman Adhikari
              </h1>

              <p className={`${jetBrainsMono.className} mt-5 max-w-full whitespace-nowrap text-gray-400 opacity-90 tracking-[-0.05em] [font-size:clamp(0.58rem,2.4vw,1.2rem)] leading-none`}>
                Software Engineer · Embedded Systems · Machine Learning
              </p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.55, duration: 1 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
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
                transition={{ delay: 3.35, duration: 1.2 }}
                onClick={handleScrollClick}
                className="mt-12 flex items-center gap-4 text-white cursor-pointer"
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
          </div>
        )}
      </motion.section>
    </>
  );
}
