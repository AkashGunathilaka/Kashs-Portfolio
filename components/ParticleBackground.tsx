"use client";

import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const particleOptions: ISourceOptions = {
  fullScreen: false,
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#ffffff",
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      direction: "right",
      speed: 0.05,
    },
    size: {
      value: { min: 1, max: 2 },
    },
    opacity: {
      value: { min: 0.1, max: 0.8 },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        quantity: 1,
      },
    },
  },
  detectRetina: true,
};

export default function ParticleBackground() {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      await loadSlim(tsParticles);
      if (cancelled) return;

      await tsParticles.load({
        id: "tsparticles",
        options: particleOptions,
      });
    })();

    return () => {
      cancelled = true;
      tsParticles.items.forEach((container) => container.destroy());
    };
  }, []);

  return <div id="tsparticles" className="particles-bg" aria-hidden="true" />;
}
