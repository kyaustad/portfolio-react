"use client";

import Image from "next/image";
import {
  AwsIcon,
  PythonIcon,
  ReactIcon,
  PostgresIcon,
  DockerIcon,
  JavascriptIcon,
  MongoIcon,
  ExpressjsIconDark,
  NodejsIconDark,
  VueIconDark,
  RustIcon,
  TypescriptIcon,
  GitIcon,
  TailwindcssIconDark,
  SupabaseIcon,
  LinkedInIcon,
  CppIcon,
  UnrealEngineIcon,
  BlenderIcon,
  BrainIcon,
  NuxtIconDark,
} from "./Icons";
import ImageCarousel from "./ImageCarousel";
import { Button } from "./ui/button";
import { EyeIcon, GlobeIcon } from "lucide-react";
import { useState } from "react";

interface Link {
  live?: string;
  github?: string;
  linkedin?: string;
  artstation?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  images?: string[];
  banner: string;
  technologies: React.ReactNode[];
  links?: Link[];
}

const projects: Project[] = [
  {
    id: "orderapp",
    title: "Order Place",
    description:
      "A multi-tenant order management platform for vendors and customers. Built with React, Node.js, and PostgreSQL. It allows vendors of retail locations to create and share catalogues of inventory and products, invite and manage clients and transition to online payments. Vendors have no reliable way to take modern payment methods without losing a large percentage to their manufacturer or distributor, Order Place solves that by offering linked Stripe account payments for direct access to modern payment methods.",
    images: [
      "/orderapp/orderapp-1.webp",
      "/orderapp/orderapp-2.webp",
      "/orderapp/orderapp-3.webp",
      "/orderapp/orderapp-4.webp",
      "/orderapp/orderapp-5.webp",
      "/orderapp/orderapp-6.webp",
      "/orderapp/orderapp-7.webp",
      "/orderapp/orderapp-8.webp",
      "/orderapp/orderapp-9.webp",
      "/orderapp/orderapp-10.webp",
      "/orderapp/orderapp-11.webp",
      "/orderapp/orderapp-12.webp",
      "/orderapp/orderapp-13.webp",
      "/orderapp/orderapp-14.webp",
      "/orderapp/orderapp-15.webp",
    ],
    banner: "/orderapp/order-banner.webp",
    links: [
      {
        live: "https://place-an-order.app",
      },
    ],
    technologies: [
      <ReactIcon className="w-10 h-10" key="react-orderapp" />,
      <SupabaseIcon className="w-10 h-10" key="supabase-orderapp" />,
      <NodejsIconDark className="w-10 h-10" key="nodejs-orderapp" />,
      <PostgresIcon className="w-10 h-10" key="postgres-orderapp" />,
      <TypescriptIcon className="w-10 h-10" key="typescript-orderapp" />,
      <GitIcon className="w-10 h-10" key="git-orderapp" />,
      <TailwindcssIconDark className="w-10 h-10" key="tailwind-orderapp" />,
      <BrainIcon className="w-10 h-10" key="brain-orderapp" />,
    ],
  },
  {
    id: "voyyance",
    title: "Voyyance",
    description:
      "Bringing insight and data to the door-to-door sales industry. I am a full-stack engineer, and have lead feature addition from dynamic emails, profitability and earnings projections and calculations, and spearheaded the design and architecture of our native apps, prioritizing a local first and offline available approach.",
    images: [
      "/voyyance/1.png",
      "/voyyance/2.png",
      "/voyyance/3.png",
      "/voyyance/4.png",
      "/voyyance/5.png",
    ],
    banner: "/voyyance/1.png",
    links: [
      {
        live: "https://voyyance.com",
        linkedin:
          "https://www.linkedin.com/company/voyyance/posts/?feedView=all",
      },
    ],
    technologies: [
      <ReactIcon className="w-10 h-10" key="react-voyyance" />,
      <AwsIcon className="w-10 h-10" key="aws-voyyance" />,
      <PythonIcon className="w-10 h-10" key="python-voyyance" />,
      <PostgresIcon className="w-10 h-10" key="postgres-voyyance" />,
      <DockerIcon className="w-10 h-10" key="docker-voyyance" />,
      <RustIcon className="w-10 h-10" key="rust-voyyance" />,
      <TypescriptIcon className="w-10 h-10" key="typescript-voyyance" />,
      <GitIcon className="w-10 h-10" key="git-voyyance" />,
      <TailwindcssIconDark className="w-10 h-10" key="tailwind-voyyance" />,
    ],
  },
  {
    id: "shrike-lms",
    title: "Shrike LMS",
    description:
      "Shrike Pest Control needed a better approach to training with more data, flexibility and speed, all without breaking the bank. Traditional LMS platforms can quickly become expensive for startup companies, so I made one. Extremely flexible, fast, and beautiful.",
    images: [
      "/lms/1.png",
      "/lms/2.png",
      "/lms/3.png",
      "/lms/4.png",
      "/lms/5.png",
      "/lms/6.png",
      "/lms/7.png",
      "/lms/8.png",
      "/lms/9.png",
      "/lms/10.png",
      "/lms/11.png",
      "/lms/12.png",
      "/lms/13.png",
      "/lms/14.png",
    ],
    banner: "/lms/lms-banner.png",
    links: [
      {
        live: "https://training.shrike-marketing.com",
        linkedin:
          "https://www.linkedin.com/pulse/learning-management-system-lms-vue-nuxt-tailwind-css-kyle-austad-654he/",
      },
    ],
    technologies: [
      <TypescriptIcon className="w-10 h-10" key="typescript-shrike-lms" />,
      <MongoIcon className="w-10 h-10" key="mongo-shrike-lms" />,
      <SupabaseIcon className="w-10 h-10" key="supabase-shrike-lms" />,
      <TailwindcssIconDark className="w-10 h-10" key="tailwind-shrike-lms" />,
      <GitIcon className="w-10 h-10" key="git-shrike-lms" />,
      <PostgresIcon className="w-10 h-10" key="postgres-shrike-lms" />,
      <NodejsIconDark className="w-10 h-10" key="nodejs-shrike-lms" />,
      <DockerIcon className="w-10 h-10" key="docker-shrike-lms" />,
    ],
  },

  {
    id: "metro-island",
    title: "Metro Island",
    description:
      "A complete game focused on building an island city and stat management. Build a thriving metropolis on remote islands and manage your city with the buildings you build. Don’t let any of them get too high or too low though! The goal here was to develop a complete game with a cohesive experience. While there are flaws, the core mechanics and art style turned out very fun and cozy!",
    images: [
      "/metro/m-2.jpg",
      "/metro/m-3.jpg",
      "/metro/m-4.jpg",
      "/metro/m-5.jpg",
      "/metro/m-6.jpg",
      "/metro/m-7.jpg",
      "/metro/m-8.jpg",
      "/metro/m-9.jpg",
      "/metro/m-10.jpg",
      "/metro/m-11.jpg",
    ],
    banner: "/metro/metro-banner.jpg",
    links: [
      {
        live: "https://thiscketcrab.itch.io/metro-island",
      },
    ],
    technologies: [
      <CppIcon className="w-10 h-10" key="cpp-metro-island" />,
      <UnrealEngineIcon
        className="w-10 h-10"
        key="unreal-engine-metro-island"
      />,
      <GitIcon className="w-10 h-10" key="git-metro-island" />,
      <BlenderIcon className="w-10 h-10" key="blender-metro-island" />,
    ],
  },
  {
    id: "unreal-assets",
    title: "Unreal Assets",
    description:
      "A wide collection of asset packs made for Unreal Engine, using varying degrees of C++ and Unreal Blueprints. Focused on ease of use and simple implementation of commonly created systems, ranging from objective and quest management, dialogue systems, to a complete re-creation of the spell system from Morrowind.",
    images: [
      "/fab/fab-1.webp",
      "/fab/fab-2.webp",
      "/fab/fab-3.webp",
      "/fab/fab-4.webp",
      "/fab/fab-5.webp",
      "/fab/fab-6.webp",
      "/fab/fab-7.webp",
      "/fab/fab-8.webp",
      "/fab/fab-9.webp",
    ],
    banner: "/fab/fab-banner.webp",
    links: [
      {
        live: "https://www.fab.com/sellers/Crab%20Interactive",
        github: "https://git.crabinteractive.com/explore/repos",
      },
    ],
    technologies: [
      <CppIcon className="w-10 h-10" key="cpp-unreal-assets" />,
      <UnrealEngineIcon
        className="w-10 h-10"
        key="unreal-engine-unreal-assets"
      />,
      <GitIcon className="w-10 h-10" key="git-unreal-assets" />,
      <BlenderIcon className="w-10 h-10" key="blender-unreal-assets" />,
      <DockerIcon className="w-10 h-10" key="docker-unreal-assets" />,
    ],
  },
  {
    id: "3d-renders",
    title: "3D Renders",
    description:
      "A selection of renders done using various tools in Blender and beyond with many different styles. From photo-realistic to stylized. Covering a range of subjects from landscapes to portraits.",
    images: [
      "/blender/blend-1.webp",
      "/blender/blend-2.webp",
      "/blender/blend-3.webp",
      "/blender/blend-4.webp",
      "/blender/blend-5.webp",
      "/blender/blend-6.webp",
    ],
    banner: "/blender/tv-banner.webp",
    links: [
      {
        artstation: "https://www.artstation.com/kyaustad",
      },
    ],
    technologies: [
      <GitIcon className="w-10 h-10" key="git-3d-renders" />,
      <BlenderIcon className="w-10 h-10" key="blender-3d-renders" />,
      <BrainIcon className="w-10 h-10" key="brain-3d-renders" />,
    ],
  },
];

const extraProjects: Project[] = [
  {
    id: "just-canvas",
    title: "Just Canvas",
    description:
      "With a background in Door-to-Door, and development experience, I set out to create a simple app for canvassing and door-to-door. Composed of three parts, the back-end database using MongoDB, the API written in express.js, and the front-end app. The front-end was originally written in Ionic/Vue, but later re-written using Vue3 and PrimeVue. The full-stack is build and deployed to a self-hosted UnRaid server and Docker registry.",
    images: [
      "/justCanvas/jc-1.png",
      "/justCanvas/jc-2.png",
      "/justCanvas/jc-3.png",
      "/justCanvas/jc-4.png",
      "/justCanvas/jc-5.png",
      "/justCanvas/jc-6.png",
      "/justCanvas/jc-7.png",
      "/justCanvas/jc-8.png",
      "/justCanvas/jc-9.png",
      "/justCanvas/jc-10.png",
      "/justCanvas/jc-11.png",
    ],
    banner: "/justCanvas/justcanvas-banner.png",
    links: [
      {
        live: "https://justcanvas.app",
        linkedin:
          "https://www.linkedin.com/pulse/justcanvas-app-api-kyle-austad-nsdlc/",
      },
    ],
    technologies: [
      <TypescriptIcon className="w-10 h-10" key="typescript-justcanvas" />,
      <MongoIcon className="w-10 h-10" key="mongo-justcanvas" />,
      <ExpressjsIconDark className="w-10 h-10" key="expressjs-justcanvas" />,
      <VueIconDark className="w-10 h-10" key="vue-justcanvas" />,
      <DockerIcon className="w-10 h-10" key="docker-justcanvas" />,
      <GitIcon className="w-10 h-10" key="git-justcanvas" />,
    ],
  },
  {
    id: "cardyo",
    title: "Cardyo",
    description:
      "A simple PWA/Web App for creating and sharing digital business cards. Build with Nuxt3 and TailwindCSS. All data is stored in the shared URL, with cards offering a QR code for easy sharing, and VCF export for easy contact saving.",
    images: [
      "/cardyo/cardyo-1.webp",
      "/cardyo/cardyo-2.webp",
      "/cardyo/cardyo-banner.webp",
    ],
    banner: "/cardyo/cardyo-banner.webp",
    links: [
      {
        live: "https://cardyo.kyleaustad.com/",
        github: "https://github.com/kyaustad/cardyo",
      },
    ],
    technologies: [
      <TypescriptIcon className="w-10 h-10" key="typescript-cardyo" />,
      <NuxtIconDark className="w-10 h-10" key="nuxt-cardyo" />,
      <VueIconDark className="w-10 h-10" key="vue-cardyo" />,
      <GitIcon className="w-10 h-10" key="git-cardyo" />,
    ],
  },
  {
    id: "raidash",
    title: "Raidash",
    description:
      "Raidash is a simple and intuitive dashboard designed for being a futuristic, highly stylized homepage. Built with Nuxt 3 and styled using Tailwind CSS, it provides statistics and streamlines the creation and deletion of shortcuts, complete with icon and image support.",

    banner: "/raidash/banner.webp",
    links: [
      {
        github: "https://github.com/kyaustad/raidash",
      },
    ],
    technologies: [
      <TypescriptIcon className="w-10 h-10" key="typescript-raidash" />,
      <NuxtIconDark className="w-10 h-10" key="nuxt-raidash" />,
      <TailwindcssIconDark className="w-10 h-10" key="tailwind-raidash" />,
      <JavascriptIcon className="w-10 h-10" key="javascript-raidash" />,
      <VueIconDark className="w-10 h-10" key="vue-raidash" />,
      <GitIcon className="w-10 h-10" key="git-raidash" />,
    ],
  },
];

export default function WorkSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const renderLinkButtons = (link: Link, index: number) => {
    const buttons = [];

    if (link.live) {
      buttons.push(
        <a
          key={`live-${index + link.live}`}
          href={link.live}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Button variant="default" size="xl">
            <GlobeIcon className="w-4 h-4" />
            Website
          </Button>
        </a>
      );
    }

    if (link.linkedin) {
      buttons.push(
        <a
          key={`linkedin-${index + link.linkedin}`}
          href={link.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Button variant="outline" size="xl">
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </Button>
        </a>
      );
    }

    if (link.github) {
      buttons.push(
        <a
          key={`github-${index + link.github}`}
          href={link.github}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Button variant="outline" size="xl">
            <GitIcon className="w-4 h-4" />
            GitHub
          </Button>
        </a>
      );
    }

    if (link.artstation) {
      buttons.push(
        <a
          key={`artstation-${index + link.artstation}`}
          href={link.artstation}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Button variant="outline" size="xl">
            <GlobeIcon className="w-4 h-4" />
            ArtStation
          </Button>
        </a>
      );
    }

    return buttons;
  };
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-muted-foreground mb-4">
            My Work
            <span className="block w-32 h-1 bg-red-500 mx-auto mt-4"></span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 border border-red-500 rounded-lg overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Project Image */}
                <div className="lg:w-1/2 p-6">
                  <div className="relative">
                    <Image
                      src={project.banner}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-lg cursor-pointer"
                      onClick={() => {
                        window.open(project.banner, "_blank");
                      }}
                    />
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <div
                        key={crypto.randomUUID()}
                        className="bg-gray-700 rounded p-1"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div className="lg:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-center items-center flex-wrap">
                    {project.links &&
                      project.links.flatMap((link, index) =>
                        renderLinkButtons(link, index)
                      )}

                    {project.images && (
                      <ImageCarousel
                        images={project.images}
                        title={project.title}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-10">
          <Button
            variant="ghost"
            size="2xl"
            className="text-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 p-2 group"
            onClick={() => setShowAllProjects(!showAllProjects)}
          >
            <div className="flex items-center gap-2 p-2 bg-secondary rounded-lg shadow-inner shadow-black/50 drop-shadow-sm group-hover:scale-95 transition-all duration-300 cursor-pointer">
              <EyeIcon className="min-w-6 min-h-6" />
              {showAllProjects ? "Hide Extra Projects" : "Show More Projects"}
            </div>
          </Button>
        </div>
        {showAllProjects && (
          <div className="space-y-12 mt-10">
            {extraProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 border border-secondary rounded-lg overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="lg:w-1/2 p-6">
                    <div className="relative">
                      <Image
                        src={project.banner}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg cursor-pointer"
                        onClick={() => {
                          window.open(project.banner, "_blank");
                        }}
                      />
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <div
                          key={crypto.randomUUID()}
                          className="bg-gray-700 rounded p-1"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="lg:w-1/2 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-center items-center flex-wrap">
                      {project.links &&
                        project.links.flatMap((link, index) =>
                          renderLinkButtons(link, index)
                        )}

                      {project.images && (
                        <ImageCarousel
                          images={project.images}
                          title={project.title}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {showAllProjects && (
          <div className="w-full flex justify-center items-center mt-10">
            <Button
              variant="ghost"
              size="2xl"
              className="text-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 p-2 group"
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              <div className="flex items-center gap-2 p-2 bg-secondary rounded-lg shadow-inner shadow-black/50 drop-shadow-sm group-hover:scale-95 transition-all duration-300 cursor-pointer">
                <EyeIcon className="min-w-6 min-h-6" />
                {showAllProjects ? "Hide Extra Projects" : "Show More Projects"}
              </div>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
