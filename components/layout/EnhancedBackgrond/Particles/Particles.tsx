"use client";

import { useEffect } from "react";

export interface ParticlesProps {
  containerId: string;
}

const particleCount = 50;

export default function Particles({ containerId }: ParticlesProps) {
  useEffect(() => {
    const particlesContainer = document.getElementById(containerId);
    if (!particlesContainer) return;

    particlesContainer.innerHTML = "";

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 20}s`;
      particlesContainer.appendChild(particle);
    }

    return () => {
      // No cleanup needed - owned by main component
    };
  }, [containerId]);

  return null;
}