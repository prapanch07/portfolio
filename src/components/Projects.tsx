"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";

const colorMap = {
  primary: { bg: "bg-primary", text: "text-primary-foreground" },
  secondary: { bg: "bg-secondary", text: "text-secondary-foreground" },
  accent: { bg: "bg-accent", text: "text-accent-foreground" },
};

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 60,
    rotate: i % 2 === 0 ? -3 : 3,
    scale: 0.9,
  }),
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const shineVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: "200%",
    transition: { duration: 1.5, delay: 0.2, ease: "easeOut" as const },
  },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: (dot: number) => ({
    scale: 1,
    transition: {
      delay: dot * 0.08,
      type: "spring" as const,
    },
  }),
};

const techTagVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, type: "spring" as const },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Things I've built that I'm proud of."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="brutal-card bg-card rounded-lg overflow-hidden group"
              >
                {/* Project Header Bar */}
                <div
                  className={`${colors.bg} p-6 border-b-4 border-foreground relative overflow-hidden`}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    variants={shineVariants}
                    className="absolute inset-0 w-1/3 bg-white/10 skew-x-12"
                  />
                  <div className="flex items-center gap-3 mb-2 relative">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          custom={dot}
                          variants={dotVariants}
                          className="w-3 h-3 rounded-full bg-foreground/30 border-2 border-foreground"
                        />
                      ))}
                    </div>
                  </div>
                  <h3
                    className={`text-xl md:text-2xl font-bold ${colors.text} relative`}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  {project.longDescription && (
                    <p className="text-sm text-muted-foreground/70 mb-4">
                      {project.longDescription}
                    </p>
                  )}

                  {/* Tech Tags with staggered pop-in */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={techTagVariants}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="text-xs font-mono font-bold border-2 border-foreground px-2 py-1 bg-muted cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="brutal-button bg-foreground text-background text-sm py-2 px-4"
                      >
                        GitHub →
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="brutal-button bg-primary text-primary-foreground text-sm py-2 px-4"
                      >
                        Live →
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/prapanch07?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="brutal-button bg-secondary text-secondary-foreground text-base px-6 py-3"
          >
            View More Projects →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
