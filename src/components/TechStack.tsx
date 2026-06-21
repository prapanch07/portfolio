"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Frontend: "bg-primary text-primary-foreground",
  Backend: "bg-secondary text-secondary-foreground",
  Database: "bg-accent text-accent-foreground",
  Tools: "bg-lavender text-foreground",
  Languages: "bg-card text-card-foreground",
};

const rotations = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "rotate-0",
  "-rotate-3",
  "rotate-3",
];

const categoryVariants = {
  hidden: (catIdx: number) => ({
    opacity: 0,
    x: catIdx % 2 === 0 ? -40 : 40,
  }),
  visible: (catIdx: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: catIdx * 0.1,
    },
  }),
};

const stickerVariants = {
  hidden: { opacity: 0, scale: 0.3, rotate: -20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.04,
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  }),
};

export default function TechStack() {
  const categories = [...new Set(skills.map((s) => s.category))];
  let globalIdx = 0;

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies and tools I work with."
        />

        <div className="space-y-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              custom={catIdx}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-mono">
                {"//"} {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, i) => {
                    const idx = globalIdx++;
                    return (
                      <motion.span
                        key={skill.name}
                        custom={idx}
                        variants={stickerVariants}
                        whileHover={{
                          scale: 1.15,
                          rotate: 0,
                          y: -5,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`sticker ${
                          categoryColors[category] || "bg-card text-foreground"
                        } ${
                          rotations[i % rotations.length]
                        } cursor-default`}
                      >
                        {skill.name}
                      </motion.span>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
