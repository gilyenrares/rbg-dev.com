"use client";

import { useEffect } from "react";

export interface CyberTextProps {}

const cyberTexts = [
  'CONNECTING...', 
  'DATABASE CONNECTING...', 
  'LINK ESTABLISHED', 
  'TERMINAL INITIALIZED', 
  'ASYNC CONNECTION ACTIVE', 
  'DATA STREAM INITIALIZED', 
  'DATABASE CONNECTION ESTABLISHED', 
  'MATRIX LOADED'
];

export default function CyberText({}: CyberTextProps) {
  useEffect(() => {
    let intervalId: number;

    const textElement = setInterval(() => {
      const randomText = cyberTexts[Math.floor(Math.random() * cyberTexts.length)];
      const tempElement = document.createElement('div');
      tempElement.textContent = randomText;
      tempElement.style.cssText = `
        position: fixed;
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 70}vw;
        color: var(--primary-cyan);
        font-size: 0.8rem;
        font-weight: 700;
        z-index: 1000;
        opacity: 0.7;
        pointer-events: none;
        animation: fadeOut 3s ease-out forwards;
        text-shadow: 0 0 10px var(--primary-cyan);
      `;
      document.body.appendChild(tempElement);

      setTimeout(() => {
        if (document.body.contains(tempElement)) {
          document.body.removeChild(tempElement!);
        }
      }, 3000);
    }, 1000);

    return (): void => {
      clearInterval(intervalId);
    };
  }, []);

  return null;
}