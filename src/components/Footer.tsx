import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-foreground text-background py-8 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-2xl font-bold">
              Prapanch<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-background/80 text-center md:text-left">
              Building products that solve real problems.
            </p>
            <p className="text-xs text-background/60">
              Software Engineer • Kerala, India
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-background/80">
              Available for opportunities....
            </p>
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
        </div>

        <div className="border-t border-background/20 mt-6 pt-6 grid grid-cols-1 md:grid-cols-3 items-center gap-2">
          <div className="hidden md:block" />
          <p className="text-sm text-background/60 text-center">
            Vibe-coded with ☕ & ⚡ by Prapanch
          </p>
          <p className="text-sm text-background/50 text-center md:text-right">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
