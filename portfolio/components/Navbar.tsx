"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-0 right-0 z-50 p-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 1, ease: "easeOut" }}
      style={{ position: 'fixed', top: '2rem', right: '2rem' }}
    >
      <div className="flex gap-8">
        <button
          onClick={() => scrollToSection('home')}
          className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-gray-300 transition-colors text-lg font-medium"
        >
          About Me
        </button>
      </div>
    </motion.nav>
  );
}