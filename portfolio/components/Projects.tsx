"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [activeProject, setActiveProject] = useState<any | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const projects = [
    {
      title: "Object Detection for Laundry",
      caption: "Real-time computer vision pipeline",
      images: ["/projects/laundry.jpg"],
      description:
        "Computer vision system for detecting, classifying, and tracking laundry items using real-time inference pipelines.",
      longDescription:
        "This project implements an end-to-end object detection pipeline optimized for real-time inference. It uses YOLO-based architectures with PyTorch, OpenCV preprocessing, and optimized batching strategies for deployment.",
      tech: ["Python", "PyTorch", "YOLOv11","YOLOv12", "RF-DETR", "ViT" ],
    },
    {
      title: "DQN Reinforcement Learning Agent",
      caption: "Deep reinforcement learning system",
      images: ["/projects/dqn.jpg"],
      description:
        "Deep Q-Network agent trained in simulated environments with experience replay and target networks.",
      longDescription:
        "A full Deep Q-Network implementation featuring experience replay buffers, target network synchronization, reward shaping, and performance tracking in Gymnasium environments.",
      tech: ["Python", "PyTorch", "OPENAI-Gymnasium", "RL"],
    },
    {
      title: "Telescope Drone",
      caption: "UAV-mounted telescope platform",
      images: ["images/Telescope.gif"],
      description:
        "Custom UAV-mounted telescope platform featuring 3D-printed gearboxes and alt-az gimbals.",
      longDescription:
        "Mechanical design of a drone-mounted telescope system including custom gear reductions, vibration isolation, and weight-optimized structural components designed in Fusion 360 and OpenSCAD.",
      tech: ["CAD", "Fusion 360", "OpenSCAD", "3D Printing"],
    },
    {
      title: "CAN-Bus Tester",
      caption: "Automotive network diagnostics & validation tool",
      images: ["/projects/can-tester.jpg"],
      description:
        "CAN-Bus diagnostic and testing tool for automotive electronic modules.",
      longDescription:
        "A hardware and software platform for sniffing, injecting, and validating CAN-Bus traffic. Used for diagnostics, reverse engineering, and testing of automotive ECUs, including message decoding and fault injection.",
      tech: [
        "CAN-Bus",
        "Embedded Systems",
        "Automotive ECUs",
        "Reverse Engineering",
        "Microcontrollers",
      ],
    },
    {
      title: "Analog Synthesizers",
      caption: "Discrete analog audio synthesis systems",
      images: ["/projects/analog-synth.jpg"],
      description:
        "Analog audio synthesizer designs using discrete components and voltage-controlled circuits.",
      longDescription:
        "Design and prototyping of analog synthesizer circuits including oscillators, filters, envelope generators, and modulation paths. Focused on signal integrity, noise reduction, and hands-on debugging using oscilloscopes and test equipment.",
      tech: [
        "Analog Circuits",
        "Voltage Controlled Oscillators (VCO)",
        "Filters & Envelopes",
        "Control Voltages",
        "Oscilloscope",
        "PCB Prototyping",
      ],
    },
    {
      title: "FPV Drones",
      caption: "High-performance first-person-view UAV platforms",
      images: ["/projects/fpv-drone.jpg"],
      description:
        "Design, build, and tuning of FPV drone systems for high-speed and precision flight.",
      longDescription:
        "Development of FPV drone platforms including frame selection, motor and ESC matching, flight controller configuration, PID tuning, and video transmission systems. Emphasis on reliability, control responsiveness, and real-time telemetry during aggressive flight profiles.",
      tech: [
        "FPV Systems",
        "Flight Controllers",
        "PID Tuning",
        "ESCs & Brushless Motors",
        "Telemetry",
        "Betaflight",
        "Ardupilot",
      ],
    },
    {
      title: "Custom E-Bike Motor Controller",
      caption: "High-power electric motor control system",
      images: ["/projects/ebike-controller.jpg"],
      description:
        "Custom motor controller for electric bike applications with precise torque and speed control.",
      longDescription:
        "Design and development of a custom electric bike motor controller built around an STM32 microcontroller. The system implements PWM-based drive control, field-oriented control (FOC) principles, and ESC-style power stages for efficient and smooth motor operation. Inspired by VESC architectures, the controller integrates current sensing, throttle input processing, and protection mechanisms for reliable high-power operation.",
      tech: [
        "STM32",
        "Field-Oriented Control (FOC)",
        "PWM",
        "ESC Design",
        "VESC",
        "Motor Control",
        "Power Electronics",
      ],
    },
    {
      title: "SO-Arm 101 Robotic Arm",
      caption: "Servo-driven articulated robotic manipulator",
      images: ["/projects/so-arm-101.jpg"],
      description:
        "Servo-driven robotic arm platform for motion control, kinematics, and simulation integration.",
      longDescription:
        "Development and control of a eight degree-of-freedom robotic arm using bus-controlled servo motors. The project includes joint-level control, coordinated motion sequences, and integration with simulation environments for kinematic validation. Emphasis on precision positioning, repeatability, and system-level control of articulated mechanisms.",
      tech: [
        "Robotics",
        "Servo Motors",
        "Inverse Kinematics",
        "Motion Control",
        "IssacSim/Issac Lab",
        "Vison Laguange Action",
        "Large Behavior Models"
      ],
    }



  ];

  return (
    <>
      <motion.section
        ref={ref}
        id="projects"
        style={{ opacity }}
        className="min-h-screen px-20 bg-black relative py-20"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[700px] h-[700px] bg-white/5 rounded-full blur-[180px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
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
                whileHover={{ scale: 1.03 }}
                onClick={() => {
                  setActiveProject(project);
                  setImageIndex(0);
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 cursor-pointer hover:bg-white/10 transition"
              >
                <h3 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
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

      {/* ---------- MODAL ---------- */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 rounded-xl max-w-5xl w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-8 border border-white/10"
            >
              {/* Image Viewer */}
              <div className="relative">
                <img
                  src={activeProject.images[imageIndex]}
                  alt={activeProject.title}
                  className="rounded-lg w-full h-80 object-cover"
                />

                {activeProject.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    {activeProject.images.map((_: any, i: number) => (
                      <button
                        key={i}
                        onClick={() => setImageIndex(i)}
                        className={`w-3 h-3 rounded-full ${
                          i === imageIndex
                            ? "bg-white"
                            : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {activeProject.caption}
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {activeProject.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
