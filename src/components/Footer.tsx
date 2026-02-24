"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Heart, Download } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/muhammadfasya",
    color: "#00d4ff",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/muhammad-fasya",
    color: "#0ea5e9",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:mhmdfasya15@gmail.com",
    color: "#8b5cf6",
  },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contact" className="py-16 border-t border-[#1e1e2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* CTA Section */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="text-white">Let&apos;s </span>
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full border border-[#1e1e2e] bg-[#111118]/80 hover:border-[#00d4ff]/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-[#00d4ff] transition-colors duration-300" />
                </motion.a>
              );
            })}
          </div>

          {/* Resume Download Button */}
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 mb-12 border border-[#1e1e2e] bg-[#111118]/80 text-white font-medium rounded-full hover:border-[#00d4ff]/50 hover:bg-[#111118] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>

          {/* Divider */}
          <div className="h-px w-full max-w-xs mx-auto bg-linear-to-r from-transparent via-[#1e1e2e] to-transparent mb-8" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-500 text-sm">
            <span>© 2026 Muhammad Fasya</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
              and lots of coffee
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
