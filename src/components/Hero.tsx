"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

const floatingVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: (i: number) => ({
    opacity: 0.2,
    scale: 1,
    transition: { duration: 0.6, delay: 0.8 + i * 0.15, type: "spring" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Decorative Elements with staggered entrance */}
      {[
        { cls: "top-20 right-10 w-24 h-24 bg-primary rotate-12", i: 0 },
        { cls: "bottom-32 left-10 w-16 h-16 bg-secondary -rotate-6", i: 1 },
        { cls: "top-40 left-20 w-12 h-12 bg-accent rotate-45", i: 2 },
        { cls: "bottom-20 right-20 w-20 h-20 rounded-full bg-lavender", i: 3 },
        { cls: "top-1/3 right-1/4 w-8 h-8 bg-secondary rotate-12", i: 4 },
        { cls: "bottom-1/3 left-1/4 w-10 h-10 bg-primary -rotate-12 rounded-full", i: 5 },
      ].map(({ cls, i }) => (
        <motion.div
          key={i}
          custom={i}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className={`absolute ${cls} border-4 border-foreground animate-float`}
          style={{
            animationDelay: `${i * 0.7}s`,
            boxShadow: "var(--shadow-brutal)",
          }}
        />
      ))}

      <div className="max-w-[1400px] mx-auto px-6 text-center">
        {/* Sticker badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <span className="sticker bg-primary text-primary-foreground inline-block">
            Available for work
          </span>
        </motion.div>

        {/* Name with letter-by-letter animation */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 groovy-text font-rampart-one"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
        >
          {personalInfo.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-muted-foreground leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons with spring */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="brutal-button bg-primary text-primary-foreground"
          >
            View Projects →
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="brutal-button bg-secondary text-secondary-foreground"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links with stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ y: -4, rotate: 5, transition: { delay: 0, type: "spring", stiffness: 300, damping: 15 } }}
            className="w-12 h-12 border-4 border-foreground bg-card flex items-center justify-center group"
            style={{ boxShadow: "var(--shadow-brutal)" }}
            aria-label="GitHub"
          >
            <FaGithub className="text-xl text-foreground" />
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ y: -4, rotate: 5, transition: { delay: 0, type: "spring", stiffness: 300, damping: 15 } }}
            className="w-12 h-12 border-4 border-foreground bg-card flex items-center justify-center group"
            style={{ boxShadow: "var(--shadow-brutal)" }}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-xl text-foreground" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
