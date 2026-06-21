import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-foreground text-background py-8 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-2xl font-bold">
              {personalInfo.firstName}
              <span className="text-primary">.</span>
            </p>
            <p className="text-sm text-background/60 mt-1">
              Software Engineer • {personalInfo.location}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border-3 border-background bg-background/10 flex items-center justify-center transition-all group"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg text-background" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border-3 border-background bg-background/10 flex items-center justify-center transition-all group"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-lg text-background" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 border-3 border-background bg-background/10 flex items-center justify-center transition-all group"
              aria-label="Email"
            >
              <SiGmail className="text-lg text-background" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm text-background/50">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
