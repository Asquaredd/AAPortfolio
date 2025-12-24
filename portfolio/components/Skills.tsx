"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const skills = {
    "Languages": ["Python", "C++", "JavaScript", "TypeScript", "Rust"],
    "AI/ML": ["TensorFlow", "PyTorch", "Neural Networks", "Computer Vision"],
    "Embedded": ["ARM Cortex", "RTOS", "STM32", "Arduino", "BLE"],
    "Web": ["React", "Next.js", "Node.js", "Three.js"]
  };

  return (
    <motion.section
      ref={ref}
      id="skills"
      style={{ opacity, scale }}
      className="min-h-screen flex items-center justify-center px-20 bg-black relative"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl w-full z-10">
        <motion.h2 
          className="text-5xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            >
              <h3 className="text-white text-xl font-semibold mb-4">{category}</h3>
              <div className="space-y-2">
                {items.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + i * 0.05 }}
                    className="text-gray-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}