"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b-4 border-foreground"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
            if (window.location.pathname === "/" && !window.location.hash) {
              window.location.reload();
            }
          }}
          className="text-2xl font-bold font-margarine tracking-tight hover:text-primary transition-colors cursor-pointer"
        >
          JP
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all border-2 border-transparent hover:border-foreground"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 w-10 h-10 border-4 border-foreground bg-card flex items-center justify-center font-bold text-lg hover:bg-accent transition-colors"
            style={{ boxShadow: "var(--shadow-brutal)" }}
            aria-label="Toggle dark mode"
          >
            {isDark ? <HiSun className="text-amber-400 text-xl" /> : <HiMoon className="text-indigo-400 text-xl" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 border-4 border-foreground bg-card flex flex-col items-center justify-center gap-1 font-bold"
          style={{ boxShadow: "var(--shadow-brutal)" }}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t-4 border-foreground bg-background overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-semibold uppercase tracking-wider border-4 border-foreground bg-card hover:bg-primary hover:text-primary-foreground transition-all text-center"
                  style={{ boxShadow: "var(--shadow-brutal)" }}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="px-4 py-3 text-sm font-semibold uppercase tracking-wider border-4 border-foreground bg-accent hover:bg-lavender transition-all"
                style={{ boxShadow: "var(--shadow-brutal)" }}
              >
                {isDark ? <><HiSun className="inline text-amber-400 mr-2" />Light Mode</> : <><HiMoon className="inline text-indigo-400 mr-2" />Dark Mode</>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
