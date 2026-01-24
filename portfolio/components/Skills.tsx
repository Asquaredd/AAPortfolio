"use client";

import {
  motion,
  useScroll,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { useRef, useState } from "react";

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedExpertise, setSelectedExpertise] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95]
  );

  /* Auto-rotate carousel (always on) */
  useAnimationFrame(() => {
    setRotationAngle((prev) => prev + 0.08);
  });

  const skills = {
    Languages: {
      items: ["Python", "C++", "JavaScript", "TypeScript", "Rust"],
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500",
      icon: "{ }",
    },
    "AI / ML": {
      items: [
        "TensorFlow",
        "PyTorch",
        "Neural Networks",
        "Computer Vision",
        "LLMs",
      ],
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500",
      icon: "🧠",
    },
    Embedded: {
      items: ["Microcontrollers", "Linux", "STM32", "SPI", "CAN-BUS"],
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500",
      icon: "⚡",
    },
    "Robotics & Mechanical": {
      items: [
        "CAD",
        "NVIDIA Isaac Sim",
        "Encoder Feedback",
        "System Design",
        "Sim-to-Real",
        "Additive Manufacturing",
      ],
      color: "from-neutral-600 to-stone-800",
      bgGlow: "bg-neutral-600/20",
      icon: "🦾",
    },
  };

  const expertise = [
    {
      title: "3D Printing",
      description: "Custom prototypes & manufacturing",
      image: "/images/3d-printing.jpg",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Reverse Engineering",
      description: "Hardware & software analysis",
      image: "/images/reverse-engineering.jpg",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Software Design",
      description: "Architecture & system design",
      image: "/images/software-design.jpg",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Robotics",
      description: "Autonomous systems",
      image: "/images/robotics.jpg",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "PCB Design",
      description: "Circuit optimization",
      image: "/images/pcb-design.jpg",
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "CAD Modeling",
      description: "3D design & simulation",
      image: "/images/cad-modeling.jpg",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="skills"
      style={{ opacity }}
      className="min-h-screen px-6 sm:px-12 lg:px-20 py-24 bg-black relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div style={{ scale }} className="max-w-[1600px] mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Software is my specialty.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
          {/* Left – Skills Grid */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-12">
            {Object.entries(skills).map(([category, data]) => (
              <div
                key={category}
                className="relative flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{data.icon}</div>
                <h3 className="text-white text-xl font-bold mb-3">
                  {category}
                </h3>
                <div
                  className={`h-0.5 w-16 bg-gradient-to-r ${data.color}`}
                />
                <div className="mt-6 space-y-3">
                  {data.items.map((skill) => (
                    <div
                      key={skill}
                      className="text-gray-400 text-base font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right – Auto Carousel */}
          <div className="relative w-full lg:flex-1 h-[420px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="relative w-full h-full">
              {expertise.map((item, index) => {
                const angle =
                  (360 / expertise.length) * index + rotationAngle;
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const z = Math.sin((angle * Math.PI) / 180) * radius;
                const depth = (z + radius) / (radius * 2);
                const scale = 0.75 + depth * 0.25;

                return (
                  <div
                    key={item.title}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translateX(${x}px) scale(${scale})`,
                      zIndex: Math.floor(z + radius),
                      opacity: depth * 0.8 + 0.2,
                    }}
                  >
                    <div className="w-40 h-52 bg-white/[0.06] backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl">
                      <div className="h-24 relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                      </div>
                      <div className="p-4">
                        <h4 className="text-white font-bold text-sm mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
