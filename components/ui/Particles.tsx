"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,

        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
        },

        particles: {
          number: {
            value: 70,
          },

          color: {
            value: "#092D82",
          },

         links: {
  enable: true,
  color: "#092D82",
  distance: 160,
  opacity: 0.08,
  width: 1,
},

          move: {
            enable: true,
            speed: 1.5,
            outModes: {
              default: "bounce",
            },
          },

          size: {
            value: 3,
          },

          opacity: {
            value: 0.8,
          },
        },

        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}