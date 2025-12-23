"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ASCII_FRAMES } from "./asciiFrames";

export default function AsciiLogo() {
  const [frame, setFrame] = useState(0);
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);

  useEffect(() => {
    const morphTimer = setTimeout(() => {
      setIsInitialAnimationDone(true);
    }, 4000);

    return () => clearTimeout(morphTimer);
  }, []);

  useEffect(() => {
    if (!isInitialAnimationDone) return;

    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % ASCII_FRAMES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isInitialAnimationDone]);

  const lines = ASCII_FRAMES[frame].split("\n");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`frame-${frame}`}
        className="inline-block select-none"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "20px",
          lineHeight: "20px",
          transform: "scale(1)",
          transformOrigin: "center",
        }}
      >
        {lines.map((line, lineIndex) => (
          <div key={lineIndex} style={{ whiteSpace: "pre" }}>
            {line.split("").map((char, charIndex) => (
              <motion.span
                key={`${lineIndex}-${charIndex}-${frame}`}
                initial={{
                  opacity: 0,
                  y: Math.random() * 60 - 30,
                  x: Math.random() * 30 - 15,
                  rotate: Math.random() * 120 - 60,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: char === " " ? 0 : 1,
                  y: 0,
                  x: 0,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: isInitialAnimationDone ? 0.6 : 0.8,
                  delay: Math.random() * 0.6,
                  ease: "easeOut",
                }}
                style={{
                  display: "inline-block",
                  textShadow:
                    char !== " "
                      ? `
                        0 0 20px rgba(255,255,255,0.9),
                        0 0 50px rgba(255,255,255,0.6)
                      `
                      : "none",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
