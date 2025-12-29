"use client";

import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

export default function Skills() {
  const ref = useRef(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedExpertise, setSelectedExpertise] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  // Auto-rotate the carousel
  useAnimationFrame(() => {
    if (!isPaused) {
      setRotationAngle(prev => prev + 0.1);
    }
  });

  const skills = {
    "Languages": {
      items: ["Python", "C++", "JavaScript", "TypeScript", "Rust"],
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500",
      icon: "{ }"
    },
    "AI/ML": {
      items: ["TensorFlow", "PyTorch", "Neural Networks", "Computer Vision", "LLMs"],
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500",
      icon: "🧠"
    },
    "Embedded": {
      items: ["Microcontrollers", "Linux", "STM32", "SPI", "CAN-BUS"],
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500",
      icon: "⚡"
    },
    "Robotics & Mechanical": {
      items: [
        "CAD",
        "NVIDIA Issac Sim",
        "Encoder Feedback",
        "System Design",
        "Sim 2 Real/Real 2 Sim",
        "Additive Manufacturing"
      ],
      color: "from-neutral-600 to-stone-800",
      bgGlow: "bg-neutral-600/20",
      icon: "🦾"
    }

  };

  // Additional expertise with images
  const expertise = [
    {
      title: "3D Printing",
      description: "Custom prototypes & manufacturing",
      image: "/images/3d-printing.jpg",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Reverse Engineering",
      description: "Hardware & software analysis",
      image: "/images/reverse-engineering.jpg",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Software Design",
      description: "Architecture & system design",
      image: "/images/software-design.jpg",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Robotics",
      description: "Autonomous systems",
      image: "/images/robotics.jpg",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "PCB Design",
      description: "Circuit optimization",
      image: "/images/pcb-design.jpg",
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "CAD Modeling",
      description: "3D design & simulation",
      image: "/images/cad-modeling.jpg",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="skills"
      style={{ opacity }}
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 py-20 bg-black relative overflow-hidden"
    >
      {/* Dynamic background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/10 to-green-600/10 rounded-full blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div 
        style={{ scale }}
        className="max-w-[1600px] w-full z-10" // Increased max width
      >
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Software is my specialty.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid - adjusted gap and alignment */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center justify-between"> {/* Increased gap and changed to justify-between */}
          
          {/* Left Side - Skills Grid */}
          <div className="w-full lg:w-auto lg:flex-shrink-0"> {/* Added flex-shrink-0 */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">
              {Object.entries(skills).map(([category, data], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: categoryIndex * 0.1,
                    ease: "easeOut"
                  }}
                  className="group relative flex flex-col items-center text-center"
                  onHoverStart={() => setHoveredCategory(category)}
                  onHoverEnd={() => setHoveredCategory(null)}
                >
                  <div 
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 ${data.bgGlow}/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                  />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-8 flex flex-col items-center">
                      <span className="text-4xl mb-4">{data.icon}</span>
                      <h3 className="text-white text-xl font-bold tracking-tight mb-3">
                        {category}
                      </h3>
                      <div className={`h-0.5 w-16 bg-gradient-to-r ${data.color} group-hover:w-32 transition-all duration-500`} />
                    </div>

                    <div className="space-y-3 flex flex-col items-center">
                      {data.items.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: categoryIndex * 0.1 + i * 0.05 
                          }}
                          className="flex items-center gap-3 group/item"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${data.color} group-hover/item:scale-150 transition-all duration-300`} />
                          <span className="text-gray-400 group-hover/item:text-white transition-colors duration-300 text-base font-medium">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - 3D Carousel - Adjusted positioning and size */}
          <div className="w-full lg:w-auto lg:flex-1 h-[450px] relative"> {/* Removed max-w-2xl, reduced height */}
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-white mb-12 text-center"
            >
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex items-center justify-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Glow effect behind carousel */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-[80px] animate-pulse" />
              </div>

              {/* Carousel Container */}
              <div className="relative w-full h-[350px]"> {/* Reduced height */}
                {expertise.map((item, index) => {
                  const angle = (360 / expertise.length) * index + rotationAngle;
                  const radius = 180; // Reduced from 250 to prevent collision
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const z = Math.sin((angle * Math.PI) / 180) * radius;
                  const scale = (z + radius) / (radius * 2);
                  const opacity = (z + radius) / (radius * 2);
                  const isInFront = z > 0;

                  return (
                    <motion.div
                      key={item.title}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{
                        transform: `translateX(${x}px) translateZ(${z}px) scale(${scale * 0.9})`, // Added 0.9 multiplier to make cards smaller
                        opacity: opacity * 0.8 + 0.2,
                        zIndex: Math.floor(z + radius),
                        filter: isInFront ? 'none' : 'brightness(0.5) blur(0.5px)'
                      }}
                      whileHover={{ scale: scale * 1 }} // Reduced hover scale
                      onClick={() => setSelectedExpertise(index)}
                    >
                      <div className="w-40 h-52 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-xl overflow-hidden group transition-all duration-300 shadow-2xl"> {/* Reduced card size */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Image section - smaller */}
                        <div className="h-24 relative overflow-hidden"> {/* Reduced from h-32 to h-24 */}
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling!.style.display = 'flex';
                            }}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} hidden items-center justify-center`}>
                            <span className="text-white text-2xl font-bold">
                              {item.title.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                        </div>
                        
                        {/* Content - adjusted padding */}
                        <div className="p-4"> {/* Reduced from p-5 to p-4 */}
                          <h4 className="text-white font-bold text-base mb-1">{item.title}</h4> {/* Reduced text size */}
                          <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                        </div>
                        
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      </div>
                    </motion.div>
                  );
                })}

                {/* Control dots */}
                <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 flex gap-3"> {/* Moved dots down */}
                  {expertise.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const targetAngle = -index * (360 / expertise.length);
                        setRotationAngle(targetAngle);
                      }}
                      className="relative group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity`} />
                      <div className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                        Math.abs((rotationAngle % 360) - (-index * (360 / expertise.length))) < 30
                          ? 'bg-white w-10 h-2'
                          : 'bg-white/40 hover:bg-white/60'
                      }`} />
                    </button>
                  ))}
                </div>

                {/* Pause indicator */}
                {isPaused && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
                    <div className="relative px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                      <span className="text-white text-xs font-medium tracking-wider uppercase">Paused</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}