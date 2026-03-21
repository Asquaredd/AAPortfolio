"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ------------------------------- */
const polaroids = [
  { title: "Astrophotography", rotation: -8, x: -140, y: -80, image: "/images/me_space.jpg" },
  { title: "CNC & 3D Printing", rotation: 6, x: 120, y: -20, image: "/images/cncandprinter.jpg" },
  { title: "Workshop", rotation: -4, x: 40, y: 120, image: "/images/workselfie.jpg" },
];

/* ------------------------------- */
const cards = [
  {
    title: "Bosco",
    image: "/images/gear.png",
    x: -120,
    glow: "rgba(255, 215, 0, 0.3)",
  },
  {
    title: "Cal Poly Pomona",
    image: "/images/POMONA.png",
    x: 0,
    glow: "rgba(34,197,94,0.1)",
  },
  {
    title: "IEEE",
    image: "/images/IEEE.png",
    x: 120,
    glow: "rgba(59,130,246,0.2)",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85]);

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

      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            About Me
          </motion.h2>

          <motion.div className="space-y-6 text-lg md:text-xl text-gray-300">
            <p>I’m a computer and electrical engineer passionate about electronics, software, and physical system design.</p>
            <p>A maker at heart, I enjoy building end-to-end systems that merge embedded hardware, intelligent software, and mechanical design.</p>
            <p>From autonomous platforms to AI-driven tools, I focus on creating systems that solve real-world problems.</p>
          </motion.div>

          {/* 🔥 CARD STACK (FIXED) */}
          <motion.div className="relative w-[320px] h-[200px] mx-auto lg:mx-0 mt-8">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="absolute flex items-center justify-center cursor-pointer"
                style={{
                  left: "50%",
                  top: "50%",
                  x: card.x,
                  y: "-50%",
                  translateX: "-50%",
                  translateY: "-50%",
                  scale: 1.2,
                  zIndex: i,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -30,
                  zIndex: 20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
              >
                {/* Glow */}
                <div
                  className="absolute w-[110px] h-[110px] rounded-full blur-3xl"
                  style={{
                    background: card.glow,
                    opacity: 0.25,
                  }}
                />

                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[80px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative w-full h-[500px] flex items-center justify-center">
          {polaroids.map((p, i) => (
            <motion.div
              key={i}
              className="absolute cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -14, rotate: 0, zIndex: 20 }}
              style={{ rotate: p.rotation, x: p.x, y: p.y }}
            >
              <motion.div className="absolute inset-0 -z-10 bg-white/30 blur-2xl rounded-sm" />

              <div className="w-60 p-4 rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]
                bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 border border-white/30">
                <div className="relative h-48 rounded-sm overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                </div>

                <div className="h-12 mt-2 text-center text-sm font-medium text-gray-700">
                  {p.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}