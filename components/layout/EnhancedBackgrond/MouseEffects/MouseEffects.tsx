"use client";

import { useEffect, useRef } from "react";

export interface MouseEffectsProps {
  className?: string;
}

export default function MouseEffects({ className = "" }: MouseEffectsProps) {
  // Reference to cursor glow element
  const cursorGlowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mouseTimer: ReturnType<typeof setTimeout> | null = null;

    // --- Mouse Move Effects ---
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseTimer) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Move orbs slightly
      const orbs = document.querySelectorAll<HTMLElement>(".orb");
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
        orb.style.transform = `translate(${x}px, ${y}px)`;
      });

      // Particle glow effect (desktop only)
      if (window.innerWidth > 768) {
        const particles = document.querySelectorAll<HTMLElement>(".particle");
        particles.forEach((particle) => {
          const rect = particle.getBoundingClientRect();
          const particleX = rect.left + rect.width / 2;
          const particleY = rect.top + rect.height / 2;

          const distance = Math.sqrt(
            Math.pow(mouseX - particleX, 2) +
              Math.pow(mouseY - particleY, 2)
          );

          if (distance < 150) {
            const brightness = 1 - distance / 150;
            particle.style.boxShadow = `
              0 0 ${20 + brightness * 30}px
              rgba(0, 255, 255, ${0.5 + brightness * 0.5})
            `;
            particle.style.transform = `
              scale(${1 + brightness * 0.5})
            `;
          } else {
            particle.style.boxShadow = "";
            particle.style.transform = "";
          }
        });
      }

      mouseTimer = null;
    };

    // --- Cursor Glow Effect (Desktop) ---
    const handleCursorGlow = (e: MouseEvent) => {
      if (!cursorGlowRef.current) return;
      cursorGlowRef.current.style.left = `${e.clientX}px`;
      cursorGlowRef.current.style.top = `${e.clientY}px`;
      cursorGlowRef.current.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (!cursorGlowRef.current) return;
      cursorGlowRef.current.style.opacity = "0";
    };

    // Desktop check for cursor glow
    if (window.innerWidth > 768) {
      cursorGlowRef.current = document.createElement("div");
      cursorGlowRef.current.style.cssText = `
        position: fixed;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: radial-gradient(
          circle,
          rgba(0, 255, 255, 0.1) 0%,
          transparent 70%
        );
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
      `;

      document.body.appendChild(cursorGlowRef.current);
    }

    // --- Event Listeners ---
    document.addEventListener("mousemove", handleMouseMove);

    if (cursorGlowRef.current) {
      document.addEventListener("mousemove", handleCursorGlow);
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return (): void => {
      // Remove all event listeners
      document.removeEventListener("mousemove", handleMouseMove);

      document.removeEventListener("mousemove", handleCursorGlow);
      document.removeEventListener("mouseleave", handleMouseLeave);

      // Clear timer
      if (mouseTimer) clearTimeout(mouseTimer);

      // Remove cursor glow element
      if (cursorGlowRef.current) {
        try {
          document.body.removeChild(cursorGlowRef.current!);
        } catch (e) {}
      }
    };
  }, []);

  return null;
}