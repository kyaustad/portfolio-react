import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

export default function ParticleBackground({
  className = "",
}: {
  className?: string;
}) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  const particlesLoaded = async (container?: Container | undefined) => {
    console.log("Particles loaded:", container);
  };

  const options = useMemo(() => {
    return {
      autoPlay: true,
      background: {
        color: "#1c1917", // Black background
      },
      backgroundMask: {
        enable: false, // No background mask
      },
      clear: true,
      detectRetina: true,
      fpsLimit: 60,
      fullScreen: {
        enable: false,
        zIndex: -100, // Ensure particles are behind other content
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Add particles on click
          },
          onHover: {
            enable: true,
            mode: ["bubble", "grab", "connect", "trail"], // Repulse particles on hover
          },
        },
        modes: {
          push: {
            quantity: 4, // Number of particles to add on click
          },
          repulse: {
            distance: 100, // Distance of repulsion
            duration: 0.4,
          },
          attract: {
            distance: 150, // Distance to attract particles
            duration: 0.4, // Duration of the attraction effect
            speed: 0.3, // Speed of attraction
          },
          trail: {
            delay: 2, // Delay between trail particles
            quantity: 1, // Number of particles in the trail
          },
          slow: {
            factor: 0.5, // Speed reduction factor (0.5 = 50% slower)
            radius: 200, // Radius of the slowdown effect
          },
          grab: {
            distance: 200, // Distance to grab particles
            links: {
              opacity: 0.5, // Opacity of the connecting lines
            },
          },
          connect: {
            distance: 220, // Maximum distance to connect particles
            links: {
              opacity: 0.5, // Opacity of the connecting lines
            },
          },
          bubble: {
            distance: 200, // Distance from the cursor to activate the effect
            size: 10, // Size increase of particles
            duration: 2, // Duration of the effect
            opacity: 0.8, // Opacity change during the effect
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // White particles
        },
        links: {
          color: "#ff9090", // White links
          distance: 150, // Maximum distance between linked particles
          enable: true, // Enable links between particles
          opacity: 0.25, // Link opacity
          width: 0.85, // Link width
        },
        move: {
          enable: true,
          speed: 0.45, // Movement speed of particles
        },
        number: {
          density: {
            enable: true,
            // Density of particles in the canvas
          },
          value: 160, // Number of particles
        },
        opacity: {
          value: 0.5, // Particle opacity
        },
        shape: {
          type: "circle", // Circular particles
        },
        size: {
          value: { min: 1, max: 2 }, // Random size between 1 and 3
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      smooth: true,
      themes: [],
      zLayers: 1,
    };
  }, []);

  if (!init) return <></>;

  return (
    <Particles
      className={className}
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}
