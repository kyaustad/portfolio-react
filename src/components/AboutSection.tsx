"use client";

import Image from "next/image";
import { SkillCard } from "./SkillCard";
import {
  AwsIcon,
  BlenderIcon,
  BrainIcon,
  CppIcon,
  CssIcon,
  DockerIcon,
  ExpressjsIconDark,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  MongoIcon,
  NodejsIconDark,
  NuxtIconDark,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  SupabaseIcon,
  TailwindcssIconDark,
  TypescriptIcon,
  UnrealEngineIcon,
  VueIconDark,
  WordpressIcon,
} from "./Icons";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-muted-foreground mb-4">
            About
            <span className="block w-32 h-1 bg-red-500 mx-auto mt-4"></span>
          </h2>
        </div>

        {/* About Content */}
        <div className="flex flex-col  items-center gap-12">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-3 border-border/50 flex items-center justify-center">
              <Image
                src="/Portfolio.webp"
                alt="Kyle's headshot"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex-1">
            <div className="border border-red-500 rounded-lg p-6 bg-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white font-medium">
                  Anywhere You Need
                </span>
              </div>
              <p className="text-white text-lg leading-relaxed">
                I am a full-stack developer. With a background in sales, I know
                how to work hard.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="mb-16 text-center items-center justify-center mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-muted-foreground mb-4">
              Skills
              <span className="block w-32 h-1 bg-red-500 mx-auto mt-4"></span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Row 1 */}
            <SkillCard
              icon={<JavascriptIcon className="w-16 h-16" />}
              text="Javascript"
            />
            <SkillCard
              icon={<TypescriptIcon className="w-16 h-16" />}
              text="Typescript"
            />
            <SkillCard
              icon={<VueIconDark className="w-16 h-16" />}
              text="Vue"
            />
            <SkillCard
              icon={<NuxtIconDark className="w-16 h-16" />}
              text="Nuxt"
            />
            <SkillCard
              icon={<NodejsIconDark className="w-16 h-16" />}
              text="NodeJS"
            />
            <SkillCard icon={<HtmlIcon className="w-16 h-16" />} text="HTML" />
            <SkillCard icon={<CssIcon className="w-16 h-16" />} text="CSS" />
            <SkillCard
              icon={<TailwindcssIconDark className="w-16 h-16" />}
              text="Tailwind CSS"
            />
            <SkillCard
              icon={<ExpressjsIconDark className="w-16 h-16" />}
              text="ExpressJS"
            />
            <SkillCard
              icon={<SupabaseIcon className="w-16 h-16" />}
              text="Supabase"
            />
            <SkillCard icon={<AwsIcon className="w-16 h-16" />} text="AWS" />
            <SkillCard
              icon={<PythonIcon className="w-16 h-16" />}
              text="Python"
            />
            <SkillCard
              icon={<ReactIcon className="w-16 h-16" />}
              text="React"
            />
            <SkillCard icon={<RustIcon className="w-16 h-16" />} text="Rust" />
            <SkillCard
              icon={<PostgresIcon className="w-16 h-16" />}
              text="Postgres"
            />
            <SkillCard
              icon={<DockerIcon className="w-16 h-16" />}
              text="Docker"
            />
            <SkillCard
              icon={<MongoIcon className="w-16 h-16" />}
              text="MongoDB"
            />
            <SkillCard icon={<CppIcon className="w-16 h-16" />} text="C++" />
            <SkillCard
              icon={<UnrealEngineIcon className="w-16 h-16" />}
              text="Unreal Engine"
            />
            <SkillCard
              icon={<BlenderIcon className="w-16 h-16" />}
              text="Blender"
            />
            <SkillCard icon={<GitIcon className="w-16 h-16" />} text="Git" />
            <SkillCard
              icon={<WordpressIcon className="w-16 h-16" />}
              text="Wordpress"
            />
            <SkillCard
              icon={<BrainIcon className="w-16 h-16" />}
              text="A Brain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
