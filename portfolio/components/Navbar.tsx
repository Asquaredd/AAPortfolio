"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-4 right-6 z-50 p-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 4, duration: 1.2, ease: "easeOut" }}
    >
      <div className="flex flex-wrap gap-x-6 gap-y-2 justify-end">
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
