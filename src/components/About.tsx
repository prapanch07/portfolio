"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { personalInfo, education, courses } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1] as const,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const avatarVariants = {
  hidden: { scale: 0.8, rotate: -5 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 200 },
  },
};

const locationVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const eduItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A bit about who I am and what drives me."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Bio Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="brutal-card bg-card p-8 rounded-lg"
          >
            <motion.div
              variants={avatarVariants}
              className="mb-6"
            >
              <div
                className="w-32 h-32 border-4 border-foreground bg-primary rounded-lg flex items-center justify-center text-5xl font-bold text-primary-foreground mx-auto md:mx-0"
                style={{ boxShadow: "var(--shadow-brutal)" }}
              >
                JP
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {personalInfo.bio}
            </p>
            <motion.div
              variants={locationVariants}
              className="flex flex-wrap gap-2 mt-4"
            >
              <span className="sticker bg-primary text-primary-foreground -rotate-1">
                📍 {personalInfo.location}
              </span>
            </motion.div>
          </motion.div>

          {/* Education & Courses */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="brutal-card bg-card p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span
                  className="w-8 h-8 bg-accent border-3 border-foreground flex items-center justify-center text-sm font-bold"
                  style={{ boxShadow: "2px 2px 0 0 var(--foreground)" }}
                >
                  🎓
                </span>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={eduItemVariants}
                    className="border-l-4 border-primary pl-4"
                  >
                    <p className="font-bold text-sm">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">
                      {edu.degree}, {edu.field}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground mt-1">
                      {edu.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, rotate: -0.5 }}
              className="brutal-card p-6 rounded-lg bg-accent"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span
                  className="w-8 h-8 bg-card border-3 border-foreground flex items-center justify-center text-sm"
                  style={{ boxShadow: "2px 2px 0 0 var(--foreground)" }}
                >
                  📚
                </span>
                Professional Course
              </h3>
              {courses.map((course, i) => (
                <div key={i}>
                  <p className="font-bold text-sm">{course.title}</p>
                  <p className="text-sm text-accent-foreground/70 mt-1">
                    {course.provider}
                  </p>
                  <p className="text-xs font-mono text-accent-foreground/60 mt-1">
                    {course.period}
                  </p>
                  <p className="text-sm mt-2 text-accent-foreground/80">
                    {course.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
