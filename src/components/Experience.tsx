"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/portfolio";

const colorMap = {
  primary: {
    bg: "bg-primary",
    text: "text-primary-foreground",
    border: "border-primary",
  },
  secondary: {
    bg: "bg-secondary",
    text: "text-secondary-foreground",
    border: "border-secondary",
  },
  accent: {
    bg: "bg-accent",
    text: "text-accent-foreground",
    border: "border-accent",
  },
};

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
    rotate: i % 2 === 0 ? -2 : 2,
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 15,
    },
  },
};

const stickerVariants = {
  hidden: { scale: 0, rotate: -10 },
  visible: {
    scale: 1,
    rotate: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey so far."
        />

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-foreground/20 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color];
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  whileHover={{ y: -4 }}
                  className="brutal-card bg-card p-6 md:p-8 rounded-lg relative md:ml-16"
                >
                  {/* Timeline dot */}
                  <motion.div
                    variants={dotVariants}
                    className={`absolute -left-[calc(4rem+10px)] top-8 w-5 h-5 ${colors.bg} border-4 border-foreground rounded-full hidden md:block`}
                  />

                  {/* Color accent bar */}
                  <div
                    className={`absolute top-0 left-0 w-2 h-full ${colors.bg} rounded-l-lg`}
                  />

                  <div className="pl-4 md:pl-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <motion.span
                          variants={stickerVariants}
                          className={`sticker ${colors.bg} ${colors.text} text-xs`}
                        >
                          {exp.type}
                        </motion.span>
                        <span className="text-sm font-mono text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, j) => (
                        <motion.li
                          key={j}
                          variants={bulletVariants}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span
                            className={`w-2 h-2 ${colors.bg} border border-foreground mt-1.5 shrink-0`}
                          />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
