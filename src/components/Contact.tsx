"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, type: "spring" as const, stiffness: 150 },
  },
};

const contactLinks = [
  {
    icon: <SiGmail className="text-lg text-foreground" />,
    label: "email",
    href: `mailto:${personalInfo.email}`,
    text: personalInfo.email,
  },
  {
    icon: <FaLinkedinIn className="text-lg text-foreground" />,
    label: "linkedin",
    href: personalInfo.linkedin,
    text: "LinkedIn",
    external: true,
  },
  {
    icon: <FaGithub className="text-lg text-foreground" />,
    label: "github",
    href: personalInfo.github,
    text: "GitHub",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's build something great together."
        />

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="brutal-card bg-card p-8 md:p-10 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                I&apos;m always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    variants={linkVariants}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 text-foreground hover:text-primary hover:underline font-semibold text-lg"
                  >
                    <span
                      className="w-12 h-12 border-3 border-foreground bg-card flex items-center justify-center"
                      style={{
                        boxShadow: "2px 2px 0 0 var(--foreground)",
                      }}
                    >
                      {link.icon}
                    </span>
                    {link.text}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
