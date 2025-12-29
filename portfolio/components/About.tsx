"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section
      ref={ref}
      id="about"
      style={{ opacity, scale }}
      className="h-screen flex items-center justify-center px-20 bg-black relative"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl w-full z-10">
        <motion.h2 
          className="text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="space-y-6 text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            I'm a computer and electrical engineer passionate about electronics, software, design, and more. 
          </p>
          <p>
            I am a maker at heart and i enjoy a challege at takling the some of the worlds most challenging problems.
            I design and prototype complete systems—spanning electronics, embedded software,
            mechanical CAD, and rapid 3D-printed fabrication.
          </p>
          <p>
            Currently focused on developing and learning AI-powered tools for developers and discovery, 
            Making the impossiple, possible. 
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}