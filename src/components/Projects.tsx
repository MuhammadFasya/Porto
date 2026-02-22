"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Eye, Wallet, Bot, FlaskConical } from "lucide-react";

const projects = [
  {
    title: "A-Eyes",
    description:
      "A currency detection web app for visually impaired individuals. Uses computer vision to identify and announce currency denominations in real-time.",
    tech: ["Python", "YOLOv8", "Roboflow", "Streamlit"],
    tag: "AI / Computer Vision",
    tagColor: "from-[#00d4ff] to-[#0ea5e9]",
    icon: Eye,
    isPrototype: true,
  },
  {
    title: "Fuduit",
    description:
      "A personal finance tracker mobile app with budgeting features and interactive data visualization to help users manage their finances effectively.",
    tech: ["React Native", "SQLite", "Firebase Auth", "Chart.js"],
    tag: "Mobile App",
    tagColor: "from-[#0ea5e9] to-[#8b5cf6]",
    icon: Wallet,
    isPrototype: false,
  },
  {
    title: "Aira - Campus Mental Health Chatbot",
    description:
      "An AI-powered support assistant built for the SENTIMETER journal project, providing mental health resources and support to students.",
    tech: ["Groq API", "NLP", "Prompt Engineering"],
    tag: "AI Integration",
    tagColor: "from-[#8b5cf6] to-[#d946ef]",
    icon: Bot,
    isPrototype: false,
  },
];

export default function Projects() {
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
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl -translate-y-1/2" />

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
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my work spanning web development and artificial
              intelligence
            </p>
          </motion.div>

          {/* Responsive Grid - Stack on mobile, 2 cols on tablet, 3 cols on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl border border-[#1e1e2e] bg-[#111118]/80 hover:border-[#00d4ff]/50 transition-all duration-500 cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-linear-to-br from-[#00d4ff]/5 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    {/* Tags Row */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linear-to-r ${project.tagColor} text-xs font-semibold text-black`}
                      >
                        {project.tag}
                      </div>
                      {project.isPrototype && (
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-xs font-medium text-amber-400">
                          <FlaskConical className="w-3 h-3" />
                          Prototype
                        </div>
                      )}
                    </div>

                    {/* Icon */}
                    <div className="p-3 rounded-xl bg-[#1e1e2e] w-fit mb-4 group-hover:bg-[#00d4ff]/10 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#00d4ff]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-[#1e1e2e] text-gray-300 border border-[#2e2e3e]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <div className="flex items-center gap-2 text-[#00d4ff] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
