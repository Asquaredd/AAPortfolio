"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, CircuitBoard, Code2, Wrench, Sparkles } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  // Separate progress for the photo (slightly different timing for nice layering)
  const photoOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const photoY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -100]);
  const photoRotate = useTransform(scrollYProgress, [0, 0.4, 1], [-10, 0, 10]);

  return (
    <motion.section
      ref={ref}
      id="about"
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className="h-screen flex items-center justify-center px-8 md:px-20 bg-black relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap- items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a computer and electrical engineer passionate about electronics, software, design, and more.
            </p>
            <p>
              I am a maker at heart and enjoy tackling some of the world's most challenging problems.
            </p>
            <p>
              I design and prototype complete products and systems spanning electronics, embedded software,
              and mechanical CAD
            </p>
          </motion.div>

          {/* Icons */}
          <motion.div 
            className="flex flex-wrap gap-6 justify-center lg:justify-start text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Cpu size={32} />
            <CircuitBoard size={32} />
            <Code2 size={32} />
            <Wrench size={32} />
            <Sparkles size={32} />
          </motion.div>
        </div>

        {/* Polaroid Photo */}
        <motion.div 
          style={{ opacity: photoOpacity, y: photoY, rotate: photoRotate }}
          className="flex justify-center lg:justify-end"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rotate-3 group">
            {/* Polaroid Frame */}
            <div className="bg-white p-4 md:p-8 shadow-2xl rounded-sm">
              <div className="bg-gray-200 border-2 border-dashed rounded-sm w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-hidden">
                {/* Replace this with your actual photo */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                  YOU
                </div>
                {/* Example real image (uncomment and replace src):
                <img 
                  src="/your-photo.jpg" 
                  alt="Your portrait" 
                  className="w-full h-full object-cover"
                />
                */}
              </div>
              {/* Bottom caption area */}
              <div className="h-16 md:h-20 bg-white" />
            </div>

            {/* Subtle hover lift */}
            <motion.div 
              className="absolute inset-0 -z-10 bg-white/20 blur-xl scale-110"
              whileHover={{ scale: 120 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}