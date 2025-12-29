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
      title: "Object Detection for Laundry",
      caption: "Real-time computer vision pipeline",
      image: "/projects/laundry.jpg",
      description:
        "Computer vision system for detecting, classifying, and tracking laundry items using real-time inference pipelines.",
      longDescription:
        "This project implements an end-to-end object detection pipeline optimized for real-time inference. It uses YOLO-based architectures with PyTorch, OpenCV preprocessing, and optimized batching strategies for deployment.",
      tech: ["Python", "PyTorch", "YOLO", "OpenCV"],
    },
    {
      title: "DQN Reinforcement Learning Agent",
      caption: "Deep reinforcement learning system",
      image: "/projects/dqn.jpg",
      description:
        "Deep Q-Network agent trained in simulated environments with experience replay and target networks.",
      longDescription:
        "A full Deep Q-Network implementation featuring experience replay buffers, target network synchronization, reward shaping, and performance tracking in Gymnasium environments.",
      tech: ["Python", "PyTorch", "Gymnasium", "RL"],
    },
    {
      title: "Telescope Drone – Mechanical Design",
      caption: "UAV-mounted telescope platform",
      image: "/projects/telescope-mech.jpg",
      description:
        "Custom UAV-mounted telescope platform featuring 3D-printed gearboxes and alt-az gimbals.",
      longDescription:
        "Mechanical design of a drone-mounted telescope system including custom gear reductions, vibration isolation, and weight-optimized structural components designed in Fusion 360 and OpenSCAD.",
      tech: ["CAD", "Fusion 360", "OpenSCAD", "3D Printing"],
    },
    {
      title: "Telescope Drone – Software & Tracking",
      caption: "Star tracking & stabilization",
      image: "/projects/telescope-software.jpg",
      description:
        "Onboard star-tracking and stabilization using sensor fusion and celestial transforms.",
      longDescription:
        "Implements IMU fusion, celestial coordinate transforms, and vision-assisted alignment to stabilize and track astronomical targets in real time on embedded hardware.",
      tech: ["Python", "Raspberry Pi", "IMU", "Astrometry"],
    },
    {
      title: "Robotic Arm Simulation with Isaac Sim",
      caption: "Physics-accurate robotic simulation",
      image: "/projects/robot-arm.jpg",
      description:
        "Robotic arm simulation with motion planning and teleoperation in Isaac Sim.",
      longDescription:
        "A full robotics simulation pipeline using Isaac Sim, including URDF import, physics-based control, teleoperation, and sensor feedback loops.",
      tech: ["Isaac Sim", "Python", "ROS", "URDF"],
    },
    {
      title: "NGCP: Ground Control System",
      caption: "Engineering dashboard platform",
      image: "/projects/ngcp.jpg",
      description:
        "Engineering dashboard for data visualization and workflow tracking.",
      longDescription:
        "A web-based ground control and monitoring system built with Vue.js and Redis for real-time state tracking, caching, and responsive UI updates.",
      tech: ["Vue.js", "Redis", "Node.js", "REST APIs"],
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