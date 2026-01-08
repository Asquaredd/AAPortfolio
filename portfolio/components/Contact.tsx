"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    [0, 0.85, 1, 0.7]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [0.96, 1, 0.98]
  );

  const y = useTransform(scrollYProgress, [0, 0.5], [80, 0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      style={{ opacity, scale, y }}
      className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center px-8 py-24"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gray-200/30 rounded-full blur-[200px]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* CONTENT */}
      <motion.div className="relative z-10 w-full max-w-5xl text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6 leading-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl font-light text-gray-600 tracking-wide max-w-2xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Open to research, engineering, and high-impact collaborations.
        </motion.p>

        {/* CONTACT FORM */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 text-base shadow-sm"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 text-base shadow-sm"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 text-base shadow-sm"
                placeholder="Your Message"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gray-900 text-white font-medium py-3.5 px-6 rounded-2xl hover:bg-gray-800 transition-colors duration-300 text-base mt-2 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* CONTACT CARDS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          {/* EMAIL */}
          <div className="group relative block p-6 rounded-2xl overflow-hidden bg-white border border-gray-200 text-gray-900 no-underline shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-[11px] uppercase tracking-[0.35em] text-gray-500 mb-2">Email</div>
            <div className="text-base font-light text-gray-900 tracking-wide">aman@example.com</div>
          </div>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-6 rounded-2xl overflow-hidden bg-white border border-gray-200 text-gray-900 no-underline outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-md"
          >
            <div className="text-[11px] uppercase tracking-[0.35em] text-gray-500 mb-2">LinkedIn</div>
            <div className="text-base font-light text-gray-900 tracking-wide">View Profile</div>
          </a>

          {/* RESUME */}
          <a
            href="/resume.pdf"
            className="group relative block p-6 rounded-2xl overflow-hidden bg-white border border-gray-200 text-gray-900 no-underline outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-md"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Resume</div>
            <div className="text-base font-light text-gray-900 tracking-wide">Download PDF</div>
          </a>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          className="mt-8 mb-8 w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.section>
  );
}
