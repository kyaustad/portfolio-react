"use client";

import { ArrowDownCircleIcon } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-gray-200">Hi,</span>
          <br />
          <span className="text-gray-200">my name is </span>
          <span className="text-secondary">Kyle</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8">
          I like to code things.
        </p>

        <Button
          variant="secondary"
          size="2xl"
          className="bg-secondary hover:bg-secondary/80 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 flex items-center gap-2"
          onClick={() => {
            window.location.href = "#about";
          }}
        >
          <ArrowDownCircleIcon className="min-w-6 min-h-6" />
          See More
        </Button>
      </div>
    </section>
  );
}
