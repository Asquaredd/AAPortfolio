"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Real-time 3D visualization of deep learning architectures",
      tech: ["Python", "TensorFlow", "WebGL"],
    },
    {
      title: "Embedded IoT Controller",
      description: "Low-level firmware for smart home devices",
      tech: ["C++", "ARM", "BLE"],
    },
    {
      title: "AI Code Assistant",
      description: "Context-aware code completion using transformer models",
      tech: ["TypeScript", "GPT-4", "VSCode"],
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="projects"
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center px-20 bg-black relative py-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[700px] h-[700px] bg-white/5 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-6xl w-full z-10">
        <motion.h2 
          className="text-5xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 cursor-pointer hover:bg-white/10 transition-colors"
            >
              <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}