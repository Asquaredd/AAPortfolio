"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.8, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  // Slow blur reveal on content
  const filter = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    ["blur(12px)", "blur(4px)", "blur(0px)"]
  );

  return (
    <motion.section
      ref={ref}
      id="contact"
      style={{ opacity, scale, y }}
      className="h-screen flex items-center justify-center px-8 md:px-20 bg-black relative overflow-hidden"
    >
      {/* Animated blurred white glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main large central blob - slowly rotating + scaling */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 rounded-full blur-[180px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Secondary blob - offset, slower breathing pulse */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-white/15 rounded-full blur-[160px]"
          animate={{
            scale: [1.1, 0.9, 1.1],
            x: ["0%", "10%", "-10%", "0%"],
            y: ["0%", "-10%", "10%", "0%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Third subtle blob - floating feel */}
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-white/10 rounded-full blur-[200px]"
          animate={{
            scale: [0.9, 1.1, 0.9],
            x: ["-5%", "15%", "-5%"],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        style={{ filter }}
        className="max-w-3xl w-full z-10 text-center"
      >
        <motion.h2
          className="text-6xl md:text-7xl font-extralight tracking-tight text-white/90 mb-10 leading-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl font-light text-gray-400 tracking-wide max-w-2xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Always open to strategic collaborations and forward-thinking projects.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:aman@example.com"
            className="group relative px-10 py-4 border border-white/10 text-white text-sm font-medium tracking-wider uppercase overflow-hidden rounded-none backdrop-blur-sm transition-all duration-500 hover:border-white/40"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Send Message</span>
            <motion.div
              className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            className="px-10 py-4 border border-white/10 text-white/80 text-sm font-medium tracking-wider uppercase rounded-none backdrop-blur-sm transition-all duration-500 hover:text-white hover:border-white/30"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            LinkedIn Profile
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-20 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.section>
  );
}