"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Lightbulb, Award, User } from "lucide-react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate about creating impactful solutions through code and
              design
            </p>
          </motion.div>

          {/* Bento Grid - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Profile Picture Card */}
            <motion.div
              variants={itemVariants}
              className="lg:row-span-2 p-6 rounded-2xl border border-[#1e1e2e] bg-[#111118]/80 hover:border-[#00d4ff]/30 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-[#1e1e2e] mb-6 group">
                {/* Placeholder - Shows when no image */}
                <div className="absolute inset-0 bg-linear-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center">
                  <User className="w-24 h-24 text-[#00d4ff]/50" />
                </div>
                {/* Profile image with grayscale effect, hover to show color */}
                <Image
                  src="/profile.png"
                  alt="Muhammad Fasya"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Muhammad Fasya
              </h3>
              <p className="text-[#00d4ff] font-medium text-sm mb-4">
                Full-stack Developer & AI Enthusiast
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30">
                  6th Semester
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/30">
                  Informatics Engineering
                </span>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 p-6 sm:p-8 rounded-2xl border border-[#1e1e2e] bg-[#111118]/80 hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="p-3 rounded-xl bg-[#00d4ff]/10 text-[#00d4ff] shrink-0 w-fit">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Education & Current Focus
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
                    I&apos;m a 6th-semester Informatics Engineering student with
                    a strong passion for bridging the gap between traditional
                    web development and cutting-edge AI technologies. My journey
                    in tech has led me to explore various domains, from building
                    responsive web applications to implementing computer vision
                    solutions.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30">
                    <Award className="w-4 h-4 text-[#00d4ff] shrink-0" />
                    <span className="text-xs sm:text-sm text-[#00d4ff] font-medium">
                      DBS x Dicoding Coding Camp 2026 - Full-stack Web Developer
                      Track
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* What I Do Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-2xl border border-[#1e1e2e] bg-[#111118]/80 hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] w-fit mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                What I Do
              </h3>
              <ul className="text-gray-400 space-y-2 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] shrink-0" />
                  Full-stack Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] shrink-0" />
                  AI & Computer Vision
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shrink-0" />
                  Android Development
                </li>
              </ul>
            </motion.div>

            {/* Philosophy Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-2xl border border-[#1e1e2e] bg-[#111118]/80 hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-[#8b5cf6]/10 text-[#8b5cf6] w-fit mb-4">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                My Philosophy
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                I believe in the power of technology to solve real-world
                problems. Whether it&apos;s helping visually impaired
                individuals identify currency or creating mental health support
                tools, I&apos;m driven by the impact my work can have.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
