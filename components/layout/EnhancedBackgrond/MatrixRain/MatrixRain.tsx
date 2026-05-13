"use client";

import { useEffect } from "react";

export interface MatrixRainProps {
  containerId: string;
}

const characters =
  "01 アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

function generateColumn(): string {
  const charCount = Math.floor(Math.random() * 20 + 10);
  let text = "";
  for (let i = 0; i < charCount; i++) {
    text += characters[Math.floor(Math.random() * characters.length)] + " ";
  }
  return text;
}

export default function MatrixRain({ containerId }: MatrixRainProps) {
  useEffect(() => {
    const matrixRain = document.getElementById(containerId);
    if (!matrixRain) return;

    matrixRain.innerHTML = "";

    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
      const column = document.createElement("div");
      column.className = "matrix-column";
      column.style.left = `${i * 20}px`;
      column.style.animationDuration = `${Math.random() * 5 + 10}s`;
      column.style.animationDelay = `${Math.random() * 5}s`;
      column.textContent = generateColumn();
      matrixRain.appendChild(column);
    }

    return () => {
      // No cleanup needed for this element - it's owned by the main component
    };
  }, [containerId]);

  return null;
}