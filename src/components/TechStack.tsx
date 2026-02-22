"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiFlask,
  SiMysql,
  SiPython,
  SiOpencv,
  SiTensorflow,
  SiGit,
  SiPostman,
} from "react-icons/si";

const techCategories = [
  {
    title: "Frontend",
    color: "#00d4ff",
    techs: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Figma", icon: SiFigma },
    ],
  },
  {
    title: "Backend",
    color: "#0ea5e9",
    techs: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Flask", icon: SiFlask },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    title: "AI / Data",
    color: "#8b5cf6",
    techs: [
      { name: "Python", icon: SiPython },
      { name: "OpenCV", icon: SiOpencv },
      { name: "YOLO", icon: SiPython },
      { name: "TensorFlow", icon: SiTensorflow },
    ],
  },
  {
    title: "Tools",
    color: "#d946ef",
    techs: [
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Create marquee items (duplicate for seamless loop)
  const allTechs = techCategories.flatMap((category) =>
    category.techs.map((tech) => ({
      ...tech,
      color: category.color,
      category: category.title,
    })),
  );
  const marqueeItems = [...allTechs, ...allTechs];

  return (
    <section id="techstack" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Marquee */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden py-8 mb-16"
          >
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#0a0a0f] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#0a0a0f] to-transparent z-10" />

            <div className="flex animate-marquee">
              {marqueeItems.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className="flex items-center gap-3 mx-6 px-6 py-3 rounded-full border border-[#1e1e2e] bg-[#111118]/80 whitespace-nowrap"
                  >
                    <IconComponent
                      className="w-5 h-5"
                      style={{ color: tech.color }}
                    />
                    <span className="text-white font-medium">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Grid View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {techCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-[#1e1e2e] bg-[#111118]/80 hover:border-[#00d4ff]/30 transition-all duration-300"
              >
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.techs.map((tech) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-3 group"
                      >
                        <div
                          className="p-2 rounded-lg bg-[#1e1e2e] group-hover:bg-opacity-50 transition-all duration-300"
                          style={{
                            boxShadow: `0 0 0 0 ${category.color}`,
                          }}
                        >
                          <IconComponent
                            className="w-4 h-4"
                            style={{ color: category.color }}
                          />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
