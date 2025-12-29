"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 1, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 50
      }}
    >
      <div className="flex items-center" style={{ gap: '2.5rem' }}>
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative px-3 py-2 bg-transparent border-none outline-none cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow effect behind text */}
            {hoveredItem === item.id && (
              <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  transform: 'scale(4)',
                }}
              />
            )}
            
            <span 
              className={`relative font-bold tracking-wide transition-all duration-300 ${jetBrainsMono.className}`}
              style={{
                fontSize: '1.5rem',
                color: hoveredItem === item.id ? '#ffffff' : 'rgba(255,255,255,0.7)',
                textShadow: hoveredItem === item.id
                  ? '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff'
                  : 'none',
              }}
            >
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
