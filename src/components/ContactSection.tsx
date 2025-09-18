"use client";

import { BookMarkedIcon, FileTextIcon } from "lucide-react";
import Image from "next/image";
import {
  DocumentIcon,
  GithubIcon,
  GmailIcon,
  LinkedInIcon,
  PDFIcon,
} from "./Icons";

export default function ContactSection() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-muted-foreground mb-4">
            Contact
            <span className="block w-32 h-1 bg-red-500 mx-auto mt-4"></span>
          </h2>
        </div>

        {/* Resume Content */}
        <div className="bg-gray-800 border border-red-500 rounded-lg p-8 mb-12">
          <p className="text-white text-xl mb-8">
            {`Check out my `} <span className="text-primary">resume</span>.
          </p>

          {/* Contact Methods */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.dropbox.com/scl/fi/rjpp2hh6l48gsl7qexx1k/KyleAustadResume.docx?rlkey=rd1asccbob2xfp8ydv9tuw51a&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <DocumentIcon className="min-w-6 min-h-6 text-white" />
              <span className="text-white">{`Resume (docx)`}</span>
            </a>

            <a
              href="https://www.dropbox.com/scl/fi/ljszja34amisp91qwrqo3/KyleAustadResume.pdf?rlkey=cpf19mirh9mbyv80aee5z9fry&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <PDFIcon className="min-w-6 min-h-6 text-white" />
              <span className="text-white">{`Resume (pdf)`}</span>
            </a>
          </div>
        </div>
        {/* Contact Content */}
        <div className="bg-gray-800 border border-red-500 rounded-lg p-8 mb-12">
          <p className="text-white text-xl mb-8">
            {`Ready to `}{" "}
            <span className="text-primary">{`work together? `}</span>
            {`Let's discuss your next project.`}
          </p>

          {/* Contact Methods */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:kyle@kyleaustad.com"
              className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <GmailIcon className="min-w-6 min-h-6 text-white" />
              <span className="text-white">Email Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kyle-austad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <LinkedInIcon className="min-w-6 min-h-6 text-white" />
              <span className="text-white">LinkedIn</span>
            </a>

            <a
              href="https://github.com/kyaustad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <GithubIcon className="min-w-6 min-h-6 text-white" />
              <span className="text-white">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
