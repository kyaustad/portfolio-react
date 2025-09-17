"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GithubIcon, GmailIcon, LinkedInIcon } from "./Icons";
import { useIsMobile } from "@/hooks/use-mobile";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = () => {
    const sections = ["about", "work", "contact", "github"];
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gray-800/90 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/kyle-austad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              <LinkedInIcon className="min-w-6 min-h-6 text-white" />
            </a>
            <a
              href="https://github.com/kyaustad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <GithubIcon className="min-w-6 min-h-6 text-white" />
            </a>
            <a
              href="mailto:kyle@kyleaustad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              <GmailIcon className="min-w-6 min-h-6 text-white" />
            </a>
          </div>

          {/* Navigation */}
          {!isMobile && (
            <nav className=" items-center gap-2 flex">
              <button
                onClick={() => scrollToSection("about")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeSection === "about"
                    ? "bg-secondary text-white hover:bg-secondary/80 hover:text-white/80"
                    : "text-white hover:text-gray-300"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeSection === "work"
                    ? "bg-secondary text-white hover:bg-secondary/80 hover:text-white/80"
                    : "text-white hover:text-gray-300"
                }`}
              >
                My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeSection === "contact"
                    ? "bg-secondary text-white hover:bg-secondary/80 hover:text-white/80"
                    : "text-white hover:text-gray-300"
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("github")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeSection === "github"
                    ? "bg-secondary text-white hover:bg-secondary/80 hover:text-white/80"
                    : "text-white hover:text-gray-300"
                }`}
              >
                GitHub Stats
              </button>
            </nav>
          )}
          {isMobile && (
            <Popover>
              <PopoverTrigger asChild>
                <Button>
                  <MenuIcon className="min-w-6 min-h-6 text-white" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="bg-gray-800 border border-red-500 rounded-lg p-2 mb-12 max-w-[150px]"
                align="end"
                sideOffset={10}
              >
                <nav className="items-end gap-2 flex flex-col text-right">
                  <button
                    onClick={() => scrollToSection("about")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center w-full ${
                      activeSection === "about"
                        ? "bg-secondary text-white hover:bg-secondary/80 hover:text-white/80"
                        : "text-white hover:text-gray-300 bg-secondary/15"
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("work")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center w-full ${
                      activeSection === "work"
                        ? "bg-secondary text-white hover:bg-secondary/80 hover:text-white/80"
                        : "text-white hover:text-gray-300 bg-secondary/15"
                    }`}
                  >
                    My Work
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center w-full ${
                      activeSection === "contact"
                        ? "bg-secondary text-white hover:bg-secondary/80 hover:text-white/80"
                        : "text-white hover:text-gray-300 bg-secondary/15"
                    }`}
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => scrollToSection("github")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-center w-full ${
                      activeSection === "github"
                        ? "bg-secondary text-white hover:bg-secondary/80 hover:text-white/80"
                        : "text-white hover:text-gray-300 bg-secondary/15"
                    }`}
                  >
                    GitHub Stats
                  </button>
                </nav>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </header>
  );
}
