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
              mode: "repulse", // 🔥 push away on hover
            },
            onClick: {
              enable: true,
              mode: "push", // 💥 add particles on click
            },
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          number: { value: 40 },
          color: { value: "#60a5fa" },
          links: {
            enable: true,
            color: "#60a5fa",
            distance: 140,
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce",
            },
          },
          size: { value: 2 },
          opacity: { value: 0.4 },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}